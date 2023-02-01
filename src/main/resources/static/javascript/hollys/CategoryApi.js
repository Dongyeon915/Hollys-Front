document.addEventListener("DOMContentLoaded", () => {
  const getAllCategoryBtnEL = document.querySelector("#getAllCategory-btn")
  getAllCategoryBtnEL.addEventListener("click", () => {
    getAllCategory();
  })

  // 모든 카테고리 조회
  function getAllCategory() {
    $.ajax("http://localhost:3000/categorys", {
      contentType: "application/json",
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  // ################################################################
//   카테고리 id로 조회
  const getCategoryIdEL = document.querySelector("#getCategoryId-input")
  const getCategoryIdBtnEL = document.querySelector("#getCategoryId-btn")
  getCategoryIdBtnEL.addEventListener("click", () => {
    getCategoryById(getCategoryIdEL.value)
  })

  function getCategoryById(id) {
    $.ajax(`http://localhost:3000/categorys/id/${id}`, {
      contentType: "application/json",
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  // ################################################################
//   카테고리 menuFk로 조회
  const getCategoryMenuKkEL = document.querySelector(
      "#getCategory-menuFk-input")
  const getCategoryMenuFkBtnEL = document.querySelector(
      "#getCategory-menuFk-btn")
  getCategoryMenuFkBtnEL.addEventListener("click", () => {
    getCategoryByMenuFk(getCategoryMenuKkEL.value)
  })

  function getCategoryByMenuFk(menuFk) {
    $.ajax(`http://localhost:3000/categorys/menufk/${menuFk}`, {
      contentType: "application/json",
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  // ################################################################
//   카테고리 Type으로 조회
  const getCategoryTypeEL = document.querySelector("#getCategory-type-input")
  const getCategoryTypeBtnEL = document.querySelector("#getCategory-type-btn")
  getCategoryTypeBtnEL.addEventListener("click", () => {
    getCategoryByType(getCategoryTypeEL.value)
  })

  function getCategoryByType(type) {
    $.ajax(`http://localhost:3000/categorys/type/${type}`, {
      contentType: "application/json",
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  // ################################################################
//   카테고리를 등록
  const addCategoryIdEL = document.querySelector("#addCategoryId-input")
  const addCategoryMenuFkEL = document.querySelector("#addMenuFk-input")
  const addCategoryTypeBtnEL = document.querySelector("#addCategoryType-input")
  const addCategoryBtnEL = document.querySelector("#add-category-input-btn")
  addCategoryBtnEL.addEventListener("click", () => {
    addCategory()
  })

  function addCategory() {
    $.ajax("http://localhost:3000/categorys", {
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        category_id: addCategoryIdEL.value,
        menu_fk: addCategoryMenuFkEL.value,
        type: addCategoryTypeBtnEL.value
      }),
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  // ################################################################
//   카테고리를 수정
  const updateCategoryIdEL = document.querySelector("#updateCategoryId-input")
  const updateCategoryMenuFkEL = document.querySelector(
      "#updateCategory-menuFk-input")
  const updateCategoryTypeBtnEL = document.querySelector(
      "#updateCategory-type-input")
  const updateCategoryBtnEL = document.querySelector(
      "#update-category-input-btn")
  updateCategoryBtnEL.addEventListener("click", () => {
    UpdateCategory()
  })

  function updateCategory() {
    $.ajax("http://localhost:3000/categorys", {
      method: "PUT",
      contentType: "application/json",
      data: JSON.stringify({
        category_id: updateCategoryIdEL.value,
        menu_fk: updateCategoryMenuFkEL.value,
        type: updateCategoryTypeBtnEL.value
      }),
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  // ################################################################
//   카테고리 id로 삭제
  const deleteCategoryIdEL = document.querySelector("#delete-categoryId-input")
  const deleteCategoryIdBtnEL = document.querySelector("#delete-categoryId-btn")
  deleteCategoryIdBtnEL.addEventListener("click", () => {
    deleteCategory(deleteCategoryIdEL.value)
  })

  function deleteCategory(id) {
    $.ajax(`http://localhost:3000/categorys/${id}`, {
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