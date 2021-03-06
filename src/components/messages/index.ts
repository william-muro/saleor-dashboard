import { createContext } from "react";

export interface IMessage {
  autohide?: number;
  title?: string;
  text: string;
  onUndo?: () => void;
}
export type IMessageContext = (message: IMessage) => void;
export const MessageContext = createContext<IMessageContext>(undefined);

export * from "./MessageManager";
export default MessageContext.Consumer;
