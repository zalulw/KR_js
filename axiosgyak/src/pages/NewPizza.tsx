import { useState } from "react";

const NewPizza = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <>
      <h1>Új Pizza</h1>
      <table>
        <tr>
          <td>Név</td>
          <td>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Ár</td>
          <td>
            <input
              type="number"
              min={0}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Leírás:</td>
          <td>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>ImageUrl</td>
          <td>
            <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
          </td>
        </tr>
      </table>
    </>
  );
};

export default NewPizza;
