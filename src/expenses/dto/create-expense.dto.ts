export class CreateExpenseDto {
    readonly name: string;
    readonly amount: string;
    readonly type: string;
    readonly mode: string;
    readonly purchaseDate: string;
    readonly category: string;
}

/*

{
    name: "",
    amount: "", //made change to string; previously 0
    type: "",
    mode: "upi",
    purchaseDate: "",
    category: "others",
  }


*/