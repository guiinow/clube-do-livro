import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { databaseProviders } from '../db/db';
import { BookEntity } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

const bookEntity = new BookEntity({
  id: 1,
  buyinfo: 1,
  title: 'Livro 1',
  author: '',
  description: '',
  publisher: '',
  cover: '',
});

describe('BooksService', () => {
  let booksService: BooksService;
  let booksController: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [{
        provide: BooksService,
        useValue: {
          create: jest.fn().mockResolvedValue(bookEntity),
          findAll: jest.fn(),
          findOne: jest.fn(),
          update: jest.fn(),
          remove: jest.fn(),
        }
      },
      ...databaseProviders
      ],
    }).compile();

    booksService = module.get<BooksService>(BooksService);
    booksController = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(booksService).toBeDefined();
  });

  describe('create', () => {
    it('should create a book, given the body that matches the entity', async () => {
      // arrange
      // act

      const result = await booksService.create(bookEntity);

      // assert
      expect(result).toEqual(bookEntity);
      expect(typeof result).toEqual(typeof bookEntity);
      expect(booksService.create).toHaveBeenCalledWith(bookEntity);
      expect(booksService.create).toHaveBeenCalledTimes(1);
    })
    it('should throw an error', async () => { 
      // arrange
      jest.spyOn(booksService, 'create').mockRejectedValueOnce(new Error());
      
      // assert
      expect(booksService.create).rejects.toThrow();
    })
  })
});
