import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { TitleEscrowCreated } from "../generated/schema"
import { TitleEscrowCreated as TitleEscrowCreatedEvent } from "../generated/TitleEscrowFactory/TitleEscrowFactory"
import { handleTitleEscrowCreated } from "../src/title-escrow-factory"
import { createTitleEscrowCreatedEvent } from "./title-escrow-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let titleEscrow = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenRegistry = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let newTitleEscrowCreatedEvent = createTitleEscrowCreatedEvent(
      titleEscrow,
      tokenRegistry,
      tokenId
    )
    handleTitleEscrowCreated(newTitleEscrowCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("TitleEscrowCreated created and stored", () => {
    assert.entityCount("TitleEscrowCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "TitleEscrowCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "titleEscrow",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "TitleEscrowCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenRegistry",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "TitleEscrowCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
