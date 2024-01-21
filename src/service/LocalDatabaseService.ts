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
    try {
      const storedData = await getItem(this.DataBaseName);
      this.Customers = JSON.parse(storedData ?? "[]");

      if (!Array.isArray(this.Customers)) {
        this.Customers = [];
        await setItem(this.DataBaseName, JSON.stringify(this.Customers));
      }
    } catch (error) {
      console.error("Erro ao inicializar o banco de dados:", error);
    }
  }

  private createId(): number {
    const id = this.Customers.reduce((prev, curr) => {
      return prev > curr.id ? prev + 1 : curr.id + 1;
    }, 0);

    return id;
  }

  public async insert(newCpf: string, name: string): Promise<boolean> {
    try {
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
    } catch (erro) {
      console.log("Erro ao criar inserir novo cliente: " + erro);
      return false;
    }
  }

  public async clearAll() {
    try {
      await removeItem(this.DataBaseName);
    } catch (erro) {
      console.log("Erro ao limpar clientes: " + erro);
    }
  }
}

export const CustomerService = new CustomerDatabase();
