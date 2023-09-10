import { Badge, Button, Checkbox, Input, Mask, Table } from "react-daisyui";
import { UseDebounce } from "../hooks/UseDebounce";
import { useState } from "react";
import { useMemo } from "react";

/* eslint-disable react/prop-types */
const ListOfUsers = ({ data }) => {
  const [text, setText] = useState("");
  const handleText = (text) => {
    setText(text);
  };

  const debouncedText = UseDebounce(text, 300);
  const handleSearch = useMemo(() => {
    return data.length > 0
      ? [...data].filter((item) =>
          item.name.first.toLowerCase().includes(debouncedText.toLowerCase())
        )
      : data;
  }, [debouncedText, data]);

  console.log(handleSearch);
  return (
    <>
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Input
          placeholder="Buscar"
          onChange={(e) => handleText(e.target.value)}
          className="w-[300px]"
        />
      </div>

      <div className=" overflow-x-auto h-96">
        <Table className="rounded-box">
          <Table.Head>
            <Checkbox />
            <span>Nombre</span>
            <span>Cuidad</span>
            <span>Email</span>
            <span>Telefono</span>
          </Table.Head>
          <Table.Body>
            {handleSearch?.map((item) => {
              return (
                <Table.Row className="divide-y" key={item.login.uuid}>
                  <Checkbox />
                  <div className="flex items-center space-x-3 truncate">
                    <Mask variant="squircle" src={item.picture.thumbnail} />
                    <div>
                      <div className="font-bold">{item.name.first}</div>
                      <div className="text-sm opacity-50">{item.name.last}</div>
                    </div>
                  </div>
                  <div>
                    {item.location.city}
                    <br />
                    <Badge color="ghost" size="sm">
                      {item.location.state}
                    </Badge>
                  </div>
                  <div>{item.email}</div>
                  <Button color="ghost" size="xs">
                    {item.phone}
                  </Button>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      {handleSearch?.length === 0 && (
        <div className="flex h-96 items-center justify-center">
          <p>No se encontraron resultados</p>
        </div>
      )}
    </>
  );
};

export default ListOfUsers;
