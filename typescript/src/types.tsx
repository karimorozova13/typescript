// type variable, type capital letter
type ID = number;

// type composition
type SeveralId = number | string;

// tuple var
type Coords = [number, number];

// union, one of many
type Status = "success" | "error" | "request";

const userId: ID = 5;

const postId: SeveralId = "rghd";
const bookId: SeveralId = 76;

const coords: Coords = [31243.43, 5326.77];

const reqStatus: Status = "error";

console.log(userId, postId, bookId, coords, reqStatus);

export {};
