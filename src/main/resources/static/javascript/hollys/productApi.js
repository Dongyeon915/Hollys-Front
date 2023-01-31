document.addEventListener("DOMContentLoaded", () => {
  const getAllProductBtn = document.querySelector("#getAllProduct-btn");
  getAllProductBtn.addEventListener("click", () => {
    // "" 문자열로 찍어야함
    // console.log("getAllProductBtn");
    getAllProductApi();
  })
//  id로 상품조회
  const idNumberBox = document.querySelector("#product-id");
  const getProductIdBtn = document.querySelector("#getProductId-btn");
  // console.log(idNumberBox);
  // console.log(getProductIdBtn);
  getProductIdBtn.addEventListener("click", () => {
    // console.log(idNumberBox.value);
    const productID = idNumberBox.value;
    getProductId(productID)
  })
//  name 상품 조회
  const getProductName = document.querySelector("#product-name");
  const getProductNameBtn = document.querySelector("#getProductName-btn");
  // console.log(getProductName)
  // console.log(getProductNameBtn)
  getProductNameBtn.addEventListener("click", () => {
     // console.log(getProductName.value)
    getProductNameApi(getProductName.value)
  })
  // 상품 입력
  const addProductName = document.querySelector("#add-name")
  const addProductEng = document.querySelector("#add-name-eng")
  const addProductInfo = document.querySelector("#add-info")
  const addProductPrice = document.querySelector("#add-price")
  const addProductImagUrl = document.querySelector("#add-image-url")
  const addProductCategoryFk = document.querySelector("#add-category-fk")
  const addProductBtn = document.querySelector("#setProduct-btn")

  addProductBtn.addEventListener("click", () => {
    let productInfo = {
      name: addProductName.value,
      name_eng: addProductEng.value,
      info: addProductInfo.value,
      price: addProductPrice.value,
      image_url: addProductImagUrl.value,
      category_fk: addProductCategoryFk.value
    }
    addProductApi(productInfo);
  })
  // ######################################################################

  // 상품 업데이트 페이지
  const updateProductName = document.querySelector("#update-name")
  const updateProductEng = document.querySelector("#update-name-eng")
  const updateProductInfo = document.querySelector("#update-info")
  const updateProductPrice = document.querySelector("#update-price")
  const updateProductImagUrl = document.querySelector("#update-image-url")
  const updateProductCategoryFk = document.querySelector("#update-category-fk")
  const updateProductBtn = document.querySelector("#updateProduct-btn")

  updateProductBtn.addEventListener("click", () =>{
    let productInfo = {
      id: 49,
      name: updateProductName.value,
      name_eng: updateProductEng.value,
      info: updateProductInfo.value,
      price: updateProductPrice.value,
      image_url: updateProductImagUrl.value,
      category_fk: updateProductCategoryFk.value
    }
    console.log(productInfo)
    UpdateProductApi(productInfo)
  })


  // ######################################################################

  // id로 삭제하는 페이지
  const deleteIdEL = document.querySelector("#delete-product-id")
  const deleteBtnEl = document.querySelector("#deleteProductId-btn")

  deleteBtnEl.addEventListener("click", () => {
    DeleteProduct(deleteIdEL.value);

  })

  // ######################################################################

  function getAllProductApi() {
    $.ajax("http://localhost:3000/products", {
      contentType: "application/json",
      success: (data) => {
        data.map((eachData, index) => {
          console.log(`[${eachData.id}] ${eachData.name} 가격: ${eachData.price}원`);
        })
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  function getProductId(productID) {
    $.ajax(`http://localhost:3000/products/id/${productID}`, {
      contentType: "application/json",
      success: (data) => {
        console.log(data)
        console.log(`${data.name} 가격: ${data.price}원`);
        getProductName.value = data.name;
         updateProductName.value = data.name;
         updateProductEng.value = data.name_eng;
         updateProductInfo.value = data.info;
         updateProductPrice.value = data.price;
         updateProductImagUrl.value = data.image_url;
         updateProductCategoryFk.value = data.category_fk;
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  function getProductNameApi(productName) {
    $.ajax(`http://localhost:3000/products/name/${productName}`, {
      contentType: "application/json",
      success: (data) => {
        console.log(`${data.name} 가격: ${data.price}원`);
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  function addProductApi(productInfo) {
    $.ajax(`http://localhost:3000/products`, {
      contentType: "application/json",
      data: JSON.stringify(productInfo),
      method: "POST",
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  function UpdateProductApi(productInfo) {
    $.ajax(`http://localhost:3000/products`, {
      contentType: "application/json",
      data: JSON.stringify(productInfo),
      method: "PUT",
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  function DeleteProduct(id){
    $.ajax(`http://localhost:3000/products/${id}`,{
      contentType: "application/json",
      method: "DELETE",
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }
})