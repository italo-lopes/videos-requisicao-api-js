//======= Bytes -> json / json -> string ===============
const data = {
    param1: "value1",
    param2: "value2",
    param3: "value3"
  };
  

  console.log("====Um array de bytes em string=====")
  const byteArray = [97, 98, 99, 100]; // Array de bytes
  const byteString = String.fromCharCode(...byteArray);
  console.log(byteArray)
  console.log("tradução")
  console.log(byteString);

  // Converter para uma sequência de bytes
  console.log("== Um obj- > String ->  Um Uint8Array -> string ===")
  console.log(data)
  console.log("tradução")
  const json_data = JSON.stringify(data);
  console.log(json_data)
  const bytes = new TextEncoder().encode(json_data);
  console.log("tradução")
  console.log(bytes)
  console.log("tradução")
  const byteString4 = String.fromCharCode(...bytes);
  console.log(byteString4)


 //const uint8Array = new Uint8Array([1, 2, 3, 4, 5]); Exemplo de Uint8Array
  console.log("==Um Uint8Array -> Array simples===")
  console.log(bytes)
  console.log("tradução")
  const regularArray = Array.from(bytes);
  console.log(regularArray);

  console.log("==Um Array simples de bytes -> String===")
  const byteArray2 = [123,34,112,97,114,97,
    109,49,34,58,34,118,97,108,117,101,49,34,44,
    34,112,97,114,97,109,50,34,58,34,118,97,108,117,
    101,50,34,44,34,112,97,114,97,109,51,34,58,34,118,97,
    108,117,101,51,34,125]; // Array de bytes
  const byteString2 = String.fromCharCode(...byteArray2);
//   const decoder = new TextDecoder();
// const str = decoder.decode(uint8Array);
  console.log(byteArray2);
  console.log("tradução")
  console.log(byteString2);

  console.log("== array simples -> obj ===")
  console.log(byteArray2);
  console.log("tradução")
  console.log(JSON.parse(byteString2));