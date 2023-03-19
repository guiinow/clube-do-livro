import { Inject,Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { LoanEntity } from './entities/loan.entity';
@Injectable()
export class LoanService {
  constructor(@Inject('DATABASE_CONNECTION') private readonly connection: any) {}
  
  private loans: LoanEntity[] = [];
  
  async create(createLoanDto: CreateLoanDto): Promise<any> {
    const result = await this.connection
      .query(
        'INSERT INTO loan (associateId, bookId, duration, status, createat, updateat) VALUES ($1, $2, $3, $4, $5, $6)',
        [
          createLoanDto.associateId,
          createLoanDto.bookId,
          createLoanDto.duration,
          createLoanDto.status,
          createLoanDto.createat,
          createLoanDto.updateat,
        ],
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
      
    return result;
  }

  async findAll() {
    const result = await this.connection
    .query(`SELECT * FROM loan`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result.rows;
  }

  async findOne(id: number) {
    const result = await this.connection
    .query(`SELECT * FROM loan WHERE id = $1`, [id])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result.rows[0];
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    const result = await this.connection
      .query(
        `UPDATE loan SET associateId = $1, bookId = $2 duration = $3, status = $4, createat = $5, updateat = $5 WHERE id = $6`,
        [
          updateLoanDto.associateId,
          updateLoanDto.bookId,
          updateLoanDto.duration,
          updateLoanDto.status,
          updateLoanDto.createAt,
          updateLoanDto.updateAt,
          id,
        ],
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });

    return result;
  }

  async remove(id: number) {
    const result = await this.connection
    .query(`DELETE FROM loan WHERE id = $1`, [id])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result;
  }
}
