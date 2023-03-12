import { Body, JsonController, Get, Post } from "routing-controllers";
import "reflect-metadata";
import { DataTypes } from "sequelize";
import Lead, { LeadAttributes } from "../model/Lead";
import database from "../db";

Lead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    fio: DataTypes.STRING(128),
    email: DataTypes.STRING(128),
    phone: DataTypes.STRING(15),
    socialNetworks: DataTypes.STRING(500),
    sportingRecords: DataTypes.STRING(500),
  },
  {
    tableName: "leads",
    sequelize: database, // passing the `sequelize` instance is required
  }
);

@JsonController("/leads")
export default class LeadsController {
  @Post("/add")
  async add(@Body() newLead: LeadAttributes) {
    const lead = Lead.build(newLead);
    await lead.save();

    return lead;
  }

  @Get("/get-all")
  async getAll() {
    return await Lead.findAll();
  }

  @Get("/")
  index() {
    return "hello world!";
  }
}
