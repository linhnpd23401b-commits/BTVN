export interface Customer {
	Id: string;
	Name: string;
	Email: string;
	Age: number;
	Image: string;
}

export interface ICustomer {
	CustomerTypeId: number;
	CustomterTypeName: string;
	Customers: Customer[];
}