import { PositionType } from "./PositionType";

export interface CitiType {
    id: number;
    name: string;
    country: string;
   notes: string;
   emoji: string;
   date: string;
   position: PositionType;
}