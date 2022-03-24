import { ActionType } from "../action-types"


interface DespositAction {
    type: ActionType.DEPOSIT
    payload: number
}
interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
}
interface BankruptAction {
    type: ActionType.BANKRUPT
}

export type Action = DespositAction | WithdrawAction | BankruptAction