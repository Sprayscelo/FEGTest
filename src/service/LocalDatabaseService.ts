import Toast from "react-native-toast-message";

import { type CustomerProps } from "@components/ListCustomers/Customer/Customer";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { setItem, getItem, removeItem } = AsyncStorage;

class CustomerDatabase {
  DataBaseName: string;
  Customers: CustomerProps[];

  constructor() {
    this.Customers = [];
    this.DataBaseName = "Customers";
  }

  public async initializeDatabase(): Promise<void> {
    const getCustomers = JSON.parse((await getItem(this.DataBaseName)) ?? "[]");
    if (!getCustomers) {
      setItem(this.DataBaseName, JSON.stringify([]));
    } else {
      this.Customers = JSON.parse((await getItem(this.DataBaseName)) ?? "[]");
    }
  }

  private createId(): number {
    const id = this.Customers.reduce((prev, curr) => {
      return prev > curr.id ? prev + 1 : curr.id + 1;
    }, 0);

    return id;
  }

  public async insert(newCpf: string, name: string): Promise<boolean> {
    if (this.Customers.some(({ cpf }) => cpf === newCpf)) {
      Toast.show({
        type: "error",
        text1: "CPF já cadastrado!",
      });
      return false;
    }
    const id = this.createId();

    this.Customers.push({ id, cpf: newCpf, name });

    await setItem(this.DataBaseName, JSON.stringify(this.Customers));

    Toast.show({
      type: "success",
      text1: "Cliente cadastrado com sucess!",
    });

    return true;
  }

  public async clearAll() {
    await removeItem(this.DataBaseName);
  }
}

export const CustomerService = new CustomerDatabase();
