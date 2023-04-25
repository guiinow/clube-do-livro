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
            findOne: jest.fn().mockResolvedValue(newBookEntity),
            update: jest.fn().mockResolvedValue(newBookEntity),
            remove: jest.fn().mockResolvedValue(newBookEntity),
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

  describe('findOne', () => {
    it('should return a book, given the id', async () => {
      // arrange

      // act
      const result = await booksController.findOne(1);

      // assert
      expect(result).toEqual(newBookEntity);
      expect(typeof result).toEqual(typeof newBookEntity);
    });
    it('should throw an error', () => {
      // arrange
      jest.spyOn(booksService, 'findOne').mockRejectedValueOnce(new Error());

      // assert
      expect(booksController.findOne(1)).rejects.toThrow();
    })
  })

  describe('update', () => {
    it('should update a book, given the id', async () => {
      // arrange
      // act

      const result = await booksController.update(1, newBookEntity);

      // assert
      expect(result).toEqual(newBookEntity);
      expect(booksService.update).toHaveBeenCalledTimes(1);
      expect(booksService.update).toHaveBeenCalledWith(1, newBookEntity);

    })

    it('shoud throw and error', () => { 
      // arrange

      // act
      jest.spyOn(booksService, 'update').mockRejectedValueOnce(new Error());

      // assert
      expect(booksController.update(1, newBookEntity)).rejects.toThrow();
    })
  });

  describe('remove', () => { 
    it('should remove a book, given the id', async () => { 

      // arrange

      // act
      const result = await booksController.remove(1);

      // assert
      expect(result).toEqual(newBookEntity);
      expect(booksService.remove).toHaveBeenCalledTimes(1);
      expect(booksService.remove).toHaveBeenCalledWith(1);
      
    })
  })
  
});
