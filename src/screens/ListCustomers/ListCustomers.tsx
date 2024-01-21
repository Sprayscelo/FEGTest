import { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigatorRoutesProps } from "@routes/private.routes";

import { Header } from "@components/Header/Header";
import {
  Customer,
  CustomerProps,
} from "@components/ListCustomers/Customer/Customer";
import { SearchBar } from "@components/ListCustomers/SearchBar/SearchBar";
import { AddButtonContainer } from "@components/ListCustomers/Customer/style";
import { CustomText } from "@components/CustomText/CustomText";

import { NoContent } from "./style";

import { CustomerService } from "@service/LocalDatabaseService";

export function ListCustomers() {
  const navigation = useNavigation<StackNavigatorRoutesProps>();

  const initializeDB = async () => {
    await CustomerService.initializeDatabase();
    setCustomers(CustomerService.Customers);
  };

  const [searchValue, setSearchValue] = useState("");
  const [customers, setCustomers] = useState<CustomerProps[]>(
    CustomerService.Customers
  );
  const [filteredCustomers, setFilteredCustomers] = useState<CustomerProps[]>(
    []
  );

  useEffect(() => {
    initializeDB();
    console.log(CustomerService.Customers);
  }, []);

  useEffect(() => {
    setCustomers(CustomerService.Customers);
  }, [CustomerService.Customers]);

  const handleSearch = (value: string): void => {
    setSearchValue(() => {
      if (!value) {
        setFilteredCustomers([]);
      }
      if (value) {
        const filteredCustomers = customers.filter(
          ({ cpf, name }: CustomerProps) =>
            cpf.includes(value) ||
            name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCustomers(filteredCustomers);
      }
      return value;
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header></Header>
      <SearchBar
        value={searchValue}
        onChangeText={(value: string) => handleSearch(value)}
      ></SearchBar>
      {filteredCustomers.length === 0 && searchValue ? (
        <NoContent>
          <CustomText
            text="Nenhum contato encontrado!"
            fontSize="16px"
            fontWeight={600}
          />
        </NoContent>
      ) : (
        <FlatList
          data={filteredCustomers.length > 0 ? filteredCustomers : customers}
          renderItem={({ item }) => (
            <Customer cpf={item.cpf} name={item.name} id={item.id}></Customer>
          )}
          contentContainerStyle={{ backgroundColor: "white" }}
        />
      )}
      <AddButtonContainer onPress={() => navigation.navigate("Criar Cliente")}>
        <CustomText
          style={{
            lineHeight: 37,
            paddingTop: 17.5,
          }}
          text="+"
          fontSize="36.878px"
          color="#FFF"
        />
      </AddButtonContainer>
    </View>
  );
}
