document.addEventListener("DOMContentLoaded", () => {
  const getAllMenuBtn = document.querySelector("#getAllMenu-btn");
  // console.log(getAllMenuBtn); 확인
  getAllMenuBtn.addEventListener("click", () => {
    getAllMenuApi();
  })

// 모든 메뉴 조회
  function getAllMenuApi() {
    $.ajax("http://localhost:3000/menus", {
      contentType: "application/json",
      success: (data, textStatus, jqXHR) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

// ##############################################################

// 메뉴의 id로 조회
  const menuIdInput = document.querySelector("#getMenuId-input");
  const menuIdBtn = document.querySelector("#getMenuId-btn");
// console.log(menuIdBtn); 잡힘
// console.log(menuIdInput); 잡힘
  menuIdBtn.addEventListener("click", () => {
    getMenuById(menuIdInput.value);
  })

  function getMenuById(id) {
    $.ajax(`http://localhost:3000/menus/id/${id}`, {
      contentType: "application/json",
      success: (data, textStatus, jqXHR) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

// ##############################################################

// 메뉴의 name으로 조회
  const menuNameInput = document.querySelector("#getMenuName-input");
  const menuNameBtn = document.querySelector("#getMenuName-btn");
// console.log(menuIdBtn); 잡힘
// console.log(menuIdInput); 잡힘
  menuNameBtn.addEventListener("click", () => {
    getMenuByName(menuNameInput.value);
  })

  function getMenuByName(name) {
    $.ajax(`http://localhost:3000/menus/name/${name}`, {
      contentType: "application/json",
      success: (data, textStatus, jqXHR) => {
        console.log(`[${data.menu_id}]번 메뉴는 ${data.name} 입니다`)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

// #################################################################
  // 메뉴를 등록
  const addMenuId = document.querySelector("#addMenuId-input")
  const addMenuName = document.querySelector("#addMenuName-input")
  const addMenuBtn = document.querySelector("#add-menu-input-btn")
  // console.log(addMenuId) 확인
  // console.log(addMenuName) 확인
  // console.log(addMenuBtn) 확인
  addMenuBtn.addEventListener("click", () => {
    addMenu()
  })

  function addMenu() {
    $.ajax("http://localhost:3000/menus", {
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        menu_id: addMenuId.value,
        name: addMenuName.value
      }),
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

//   #########################################################
//   메뉴를 수정
  const updateMenuId = document.querySelector("#updateMenuId-input")
  const updateMenuName = document.querySelector("#updateMenuName-input")
  const updateMenuBtn = document.querySelector("#update-menu-input-btn")
  updateMenuBtn.addEventListener("click", () => {
    updateMenu()
  })

  function updateMenu() {
    $.ajax("http://localhost:3000/menus", {
      method: "PUT",
      contentType: "application/json",
      data: JSON.stringify({
        menu_id: updateMenuId.value,
        name: updateMenuName.value
      }),
      success: (data) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }

  // ##############################################################

// 메뉴의 id로 삭제
  const deleteMenuIdInput = document.querySelector("#delete-Menu-Id-input");
  const dleteMenuIdBtn = document.querySelector("#delete-Menu-Id-btn");
// console.log(deleteMenuIdInput);
// console.log(dleteMenuIdBtn);
  dleteMenuIdBtn.addEventListener("click", () => {
    deleteMenuById(deleteMenuIdInput.value);
  })

  function deleteMenuById(id) {
    $.ajax(`http://localhost:3000/menus/${id}`, {
      method: "DELETE",
      contentType: "application/json",
      success: (data, textStatus, jqXHR) => {
        console.log(data)
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log(textStatus)
      }
    })
  }
})