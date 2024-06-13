import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { TitleEscrowCreated } from "../generated/TitleEscrowFactory/TitleEscrowFactory"

export function createTitleEscrowCreatedEvent(
  titleEscrow: Address,
  tokenRegistry: Address,
  tokenId: BigInt
): TitleEscrowCreated {
  let titleEscrowCreatedEvent = changetype<TitleEscrowCreated>(newMockEvent())

  titleEscrowCreatedEvent.parameters = new Array()

  titleEscrowCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "titleEscrow",
      ethereum.Value.fromAddress(titleEscrow)
    )
  )
  titleEscrowCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenRegistry",
      ethereum.Value.fromAddress(tokenRegistry)
    )
  )
  titleEscrowCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return titleEscrowCreatedEvent
}
