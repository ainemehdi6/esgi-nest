import { Table, Column, Model, PrimaryKey, DataType, Unique } from 'sequelize-typescript';

@Table
export class Player extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id: number;

  @Unique
  @Column(DataType.STRING(50))
  pseudo: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  friends: string;
}
