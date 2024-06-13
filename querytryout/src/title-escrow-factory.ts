import { TitleEscrowCreated as TitleEscrowCreatedEvent } from "../generated/TitleEscrowFactory/TitleEscrowFactory"
import { TitleEscrowCreated } from "../generated/schema"

export function handleTitleEscrowCreated(event: TitleEscrowCreatedEvent): void {
  let entity = new TitleEscrowCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.titleEscrow = event.params.titleEscrow
  entity.tokenRegistry = event.params.tokenRegistry
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
