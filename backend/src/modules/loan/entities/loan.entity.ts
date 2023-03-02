export class LoanEntity {
    id: number;
    associateId: number;
    bookId: number;
    amount: number;
    interest: number;
    duration: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
