import axios from "axios";
import CryptoJS from 'crypto-js'

export const UrlApi = "https://gateway.marvel.com/";

export const getApi = async () => {
  var pubkey = "0c72524fb292664b1d335fcc63f6a077";
  var pvtkey = "3c729d4926e0a3cebe757e5106134230103cc090";
  var ts = new Date().getTime();

  var hash = CryptoJS.MD5(ts + pvtkey + pubkey);
  await axios.get(UrlApi + "v1/public/comics", {
    params: {
      apikey: "0c72524fb292664b1d335fcc63f6a077",
      ts: ts,
      hash: hash.toString(),
    },
  }).then((res)=>{
    console.log(res, 're1')
  });
};
