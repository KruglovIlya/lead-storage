import { Model, Optional } from "sequelize";

export type LeadAttributes = {
  id: number;
  fio: string;
  email: string;
  phone: string;
  socialNetworks: string;
  sportingRecords: string;
};

type LeadCreationAttributes = Optional<LeadAttributes, "id">;

export default class Lead extends Model<
  LeadAttributes,
  LeadCreationAttributes
> {
  declare id: number;
  declare fio: string;
  declare email: string;
  declare phone: string;
  declare socialNetworks: string;
  declare sportingRecords: string;
}
