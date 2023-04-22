import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { databaseProviders } from '../db/db';
import { BookEntity } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

const booksEntityList: BookEntity[] = [
  new BookEntity({
    id: 1,
    buyinfo: 1,
    title: 'Livro 1',
    author: '',
    description: '',
    publisher: '',
    cover: '',
  }),
  new BookEntity({
    id: 1,
    buyinfo: 2,
    title: 'Livro 2',
    author: '',
    description: '',
    publisher: '',
    cover: '',
  }),
];

const newBookEntity = new BookEntity({
  id: 1,
  buyinfo: 1,
  title: 'Livro 1',
  author: '',
  description: '',
  publisher: '',
  cover: '',
});
  
describe('BooksController', () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: {
            create: jest.fn().mockResolvedValue(newBookEntity),
            findAll: jest.fn().mockResolvedValue(booksEntityList),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
        ...databaseProviders,
      ],
    }).compile();

    booksController = module.get<BooksController>(BooksController);
    booksService = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(booksController).toBeDefined();
    expect(booksService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a list books', async () => {
      // act
      const result = await booksController.findAll();
      // assert
      expect(result).toEqual(booksEntityList);
      expect(typeof result).toEqual('object');
      expect(booksService.findAll).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      //  arrange
      jest.spyOn(booksService, 'findAll').mockRejectedValueOnce(new Error());

      // assert
      expect(booksController.findAll()).rejects.toThrow();
    });
  });

  describe('create', () => {
    it('should create a new book', async () => {
      // arrange
      const body: CreateBookDto = {
        id: 1,
        buyinfo: 1,
        title: 'Livro 1',
        author: '',
        description: '',
        publisher: '',
        cover: '',
      };

      // act
      const result = await booksController.create(body);

      // assert
      expect(result).toEqual(newBookEntity);
      expect(booksService.create).toHaveBeenCalledTimes(1);
      expect(booksService.create).toHaveBeenCalledWith(body);
    });
    it('should throw an exception', () => { 
      // arrange
      jest.spyOn(booksService, 'create').mockRejectedValueOnce(new Error());

      // assert
      expect(booksController.create(newBookEntity)).rejects.toThrow();
    });
  });
});
