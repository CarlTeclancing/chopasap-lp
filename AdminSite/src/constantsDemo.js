import { storeSchema } from "chop_asap_types";

const demoImg = "/facePicture.jpg"
const demoDate = new Date().getTime()
const demoAddress =  {
    street: "1234 scentersa ",
    city: "yde",
    region: "CT",
    country: "CM",
    name: "marche",
    geoPoint: "10.777777,132.77777"
}
const demoOrder =  {
        productId: "1",
        qty: "2",
        status: "pending",
        totalprice: 2000,
        accessoriesList: { accessoryId: "1", qty: 2, totalprice: 500, }
      }


// information to build this list is coming from store schema
export const demoStores =[ 
    {
    id: "1",
      name: "Demo Store YDe",
      image: demoImg,
      address: demoAddress,
      description: "Consequat irure esse exercitation laborum deserunt exercitation aute voluptate. Sit mollit non quis non. Incididunt excepteur amet minim est eiusmod aliquip adipisicing est commodo velit Lorem officia in do. Enim proident quis veniam officia aute ad reprehenderit pariatur ad minim et. Nisi voluptate eiusmod reprehenderit duis velit irure exercitation dolor Lorem. Ea ullamco qui cupidatat non consequat velit irure exercitation anim dolore eiusmod.",
      openHour: 7,
      closeHour: 18,
      prepartionTime: 11,
      owner: "1",
      keywords: ["store"],
      alwaysAvailableProducts:["1"],
      currentlyAvailableProducts:["1"],
      categories: ["african"],
      verified: false,
      minPrice: 166,
      ratings: 5,
      orders: ["1"],
      accessories: "1",
      products: ["1", "2"],
      chats:["1"]
},
    {
    id: "2",
      name: "Demo Store DLa",
      image: demoImg,
      address: demoAddress,
      description: "Consequat irure esse exercitation laborum deserunt exercitation aute voluptate. Sit mollit non quis non. Incididunt excepteur amet minim est eiusmod aliquip adipisicing est commodo velit Lorem officia in do. Enim proident quis veniam officia aute ad reprehenderit pariatur ad minim et. Nisi voluptate eiusmod reprehenderit duis velit irure exercitation dolor Lorem. Ea ullamco qui cupidatat non consequat velit irure exercitation anim dolore eiusmod.",
      openHour: 7,
      closeHour: 18,
      prepartionTime: 11,
      owner: "1",
      keywords: ["store"],
      alwaysAvailableProducts:["1"],
      currentlyAvailableProducts:["1"],
      categories: ["african"],
      verified: false,
      minPrice: 166,
      ratings: 5,
      orders: ["1"],
      accessories: "1",
      products: ["1"],
      chats:["1"]
},
    {
    id: "3",
      name: "Demo Store name",
      image: demoImg,
      address: demoAddress,
      description: "Consequat irure esse exercitation laborum deserunt exercitation aute voluptate. Sit mollit non quis non. Incididunt excepteur amet minim est eiusmod aliquip adipisicing est commodo velit Lorem officia in do. Enim proident quis veniam officia aute ad reprehenderit pariatur ad minim et. Nisi voluptate eiusmod reprehenderit duis velit irure exercitation dolor Lorem. Ea ullamco qui cupidatat non consequat velit irure exercitation anim dolore eiusmod.",
      openHour: 7,
      closeHour: 18,
      prepartionTime: 11,
      owner: "1",
      keywords: ["store"],
      alwaysAvailableProducts:["1"],
      currentlyAvailableProducts:["1"],
      categories: ["african"],
      verified: false,
      minPrice: 166,
      ratings: 5,
      orders: ["1"],
      accessories:[ "1"],
      products: ["1"],
      chats:["1"]
},
    {
    id: "4",
      name: "Demo Store name",
      image: demoImg,
      address: demoAddress,
      description: "Consequat irure esse exercitation laborum deserunt exercitation aute voluptate. Sit mollit non quis non. Incididunt excepteur amet minim est eiusmod aliquip adipisicing est commodo velit Lorem officia in do. Enim proident quis veniam officia aute ad reprehenderit pariatur ad minim et. Nisi voluptate eiusmod reprehenderit duis velit irure exercitation dolor Lorem. Ea ullamco qui cupidatat non consequat velit irure exercitation anim dolore eiusmod.",
      openHour: 7,
      closeHour: 18,
      prepartionTime: 11,
      owner: "1",
      keywords: ["store"],
      alwaysAvailableProducts:["1"],
      currentlyAvailableProducts:["1"],
      categories: ["african"],
      verified: false,
      minPrice: 166,
      ratings: 5,
      orders: ["1"],
      accessories:[ "1"],
      products: ["1"],
      chats:["1"]
},
    {
    id: "5",
      name: "Demo Store name",
      image: demoImg,
      address: demoAddress,
      description: "Consequat irure esse exercitation laborum deserunt exercitation aute voluptate. Sit mollit non quis non. Incididunt excepteur amet minim est eiusmod aliquip adipisicing est commodo velit Lorem officia in do. Enim proident quis veniam officia aute ad reprehenderit pariatur ad minim et. Nisi voluptate eiusmod reprehenderit duis velit irure exercitation dolor Lorem. Ea ullamco qui cupidatat non consequat velit irure exercitation anim dolore eiusmod.",
      openHour: 7,
      closeHour: 18,
      prepartionTime: 11,
      owner: "1",
      keywords: ["store"],
      alwaysAvailableProducts:["1"],
      currentlyAvailableProducts:["1"],
      categories: ["african"],
      verified: false,
      minPrice: 166,
      ratings: 5,
      orders: ["1"],
      accessories: "1",
      products: ["1"],
      chats:["1"]
},
]

export const demoProducts = [
    {
    id: "1",
     category: {name: "african"},
      name:"Fried Chicken",
      price: 700,
      image: demoImg,
      keywords: ["product"],
      gallery: [demoImg],
      description: "Ea adipisicing dolor dolore fugiat fugiat eu. Labore quis ex tempor non cillum culpa. Culpa occaecat dolor sit voluptate qui sunt in deserunt sint proident laborum. Adipisicing velit Lorem quis commodo sit ullamco nulla ad ea cupidatat nostrud consequat. Ex adipisicing commodo excepteur incididunt ea eiusmod pariatur duis velit laborum nulla esse incididunt. Occaecat duis minim in elit consectetur pariatur anim magna.",
      alwaysAvailable: true,
      storeId: "1",
      accessories: ["1"],
},
    {
    id: "2",
     category: {name: "african"},
      name:"Pizza",
      price: 700,
      image: demoImg,
      keywords: ["product"],
      gallery: [demoImg],
      description: "Ea adipisicing dolor dolore fugiat fugiat eu. Labore quis ex tempor non cillum culpa. Culpa occaecat dolor sit voluptate qui sunt in deserunt sint proident laborum. Adipisicing velit Lorem quis commodo sit ullamco nulla ad ea cupidatat nostrud consequat. Ex adipisicing commodo excepteur incididunt ea eiusmod pariatur duis velit laborum nulla esse incididunt. Occaecat duis minim in elit consectetur pariatur anim magna.",
      alwaysAvailable: true,
      storeId: "1",
      accessories: ["1"],
},
]

export const demoStoreOrders = [
    {
    id: "1",
    buyerId: "1",
      storeId: "1",
      orders: [
       demoOrder
      ],
      notes: "Aute aute mollit qui excepteur. Magna consequat nostrud amet ullamco sint laborum laboris. Anim laboris do sint veniam ipsum laboris. Proident labore ut dolore ad eu.",
      createdAt: demoDate,
      deliver: {
          address: demoAddress,
          fee: 100,
        },
      status: "pending",
      deliveryAgent:{
        id: "1",
        geoPoint:demoAddress.geoPoint,
      },
      transactionId: "1",
},
    {
    id: "2",
    buyerId: "1",
      storeId: "1",
      orders: [
       demoOrder
      ],
      notes: "Aute aute mollit qui excepteur. Magna consequat nostrud amet ullamco sint laborum laboris. Anim laboris do sint veniam ipsum laboris. Proident labore ut dolore ad eu.",
      createdAt: demoDate,
      deliver: {
          address: demoAddress,
          fee: 100,
        },
      status: "pending",
      deliveryAgent:{
        id: "1",
        geoPoint:demoAddress.geoPoint,
      },
      transactionId: "1",
},
]

export const demoUsers = [
        {
            id: "1",
          firstName: "Wale",
          lastName: "Anderson",
          email: "test@gmail.com",
          phone: "+237 67700223344",
          profilePicture: demoImg,
            address: [demoAddress],
            favoriteProducts: ["1"],
            favoriteStores: ["1"],
            stores: ["1"],
            appOrders: [demoOrder],
            storeOrders: ["1"],
            deliveries: ["1"],
            paymentInfo: [{  provider: "MTN",
              phone: "677009988"}],
            transactions: ["1"],
            chats: ["1"],
            notifications: ["1"],
            pushToken: "11111111",
            wallet: {
                  balance: 10000,
                  escrowBalance: 1000,
                  rewards: 10,
            }
    },
        {
            id: "2",
          firstName: "Carls",
          lastName: "Boss",
          email: "test@gmail.com",
          phone: "+237 67700223344",
          profilePicture: demoImg,
            address: [demoAddress],
            favoriteProducts: ["1"],
            favoriteStores: ["1"],
            stores: ["1"],
            appOrders: [demoOrder],
            storeOrders: ["1"],
            deliveries: ["1"],
            paymentInfo: [{  provider: "MTN",
              phone: "677009988"}],
            transactions: ["1"],
            chats: ["1"],
            notifications: ["1"],
            pushToken: "11111111",
            wallet: {
                  balance: 10000,
                  escrowBalance: 1000,
                  rewards: 10,
            }
    },
]

