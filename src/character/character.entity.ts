import { Table, Column, Model, PrimaryKey, DataType, Unique } from 'sequelize-typescript';

@Table
export class Character extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @Unique
  @Column(DataType.STRING(50))
  name: string;

  @Column(DataType.DECIMAL(5,2))
  health: number;

  @Column(DataType.INTEGER)
  strength: number;
}
