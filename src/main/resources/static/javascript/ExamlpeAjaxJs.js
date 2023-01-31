const host = "http://localhost:3000"

const deleteTest = (id) => {
  $.ajax(`${host}/tests/${id}`, {
    method: "DELETE"
  }).done((data, textStatus, jqXHR) => {
    console.log(data)
  }).fail((jqXHR, textStatus) => {
    console.log(jqXHR.statusText)
    console.log("Code: ", jqXHR.status)
    console.log("Text: ", jqXHR.responseText)
    console.log(textStatus)
  }).always(()=> {
    console.log("Log 록기")
  });
}

const putTest = (jsonData) => {
  $.ajax(`${host}/tests`, {
    dataType: "json",
    method: "PUT",
    contentType: "application/json",
    data: SON.stringify(jsonData)
  }).done((data, textStatus, jqXHR) => {
    console.log(data)
  }).fail((data, extStatus, jqXHR) => {
    console.log(jqXHR)
  })
}



// DOMContentLoaded은 defer없이 화면이 그려진뒤 해당 이벤트 실행
document.addEventListener("DOMContentLoaded", (e) => {
  console.log($)
  const idEL = document.querySelector("#id-input");
  document.querySelector("#all-id").addEventListener("click", () => {
    deleteTest(5)

    // setTest({
    //   test_value: testNameEL.value
    // });
    // setCategory()
    // getAllCategory()
    // getCategoryByID(idEL.value);
    // getTest()
  });

  // function setCategory() {
  //   $.ajax("http://172.30.1.14:3000/category/setCategory", {
  //         method: "POST",
  //         dataType: "json",
  //         contentType: "application/json",
  //         data: JSON.stringify({
  //           category_id: null,
  //           menu_fk: 1,
  //           type: "바닐라딜롸이트"
  //         })
  //       }
  //   ).done((data, textStatus, jqXHR) => {
  //     console.log(data);
  //   }).fail((jqXHR, textStatus, errorThrown) => {
  //     console.log(errorThrown);
  //   });
  // }
  //
  function setCategory() {
    $.ajax("http://172.30.1.14:3000/category/setCategory", {
          method: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify({
            category_id: null,
            menu_fk: 1,
            type: "바닐라트"
          })
        }
    ).done((data, textStatus, jqXHR) => {
      console.log(data);
    }).fail((jqXHR, textStatus, errorThrown) => {
      console.log(errorThrown);
    });
  }

  // // 작동확인 key,value map따라하기
  // function getAllCategory(){
  //   $.getJSON("http://172.30.1.14:3000/category/allcategory",null, (data, textStatus, jqXHR) => {
  //     console.log(data);
  //     alert("나오네")
  //     let categoryList = "";
  //     data.map((eachdata,index) => {
  //       console.log(`[${index}번] ID: ${eachdata.category_id}, Type: ${eachdata.type}`);
  //     })
  //     // 화면에 출력은 가능하지만 object로 전부 표시된다.
  //     // const allCategoryEL = document.querySelector(`.all-category`);
  //     // allCategoryEL.innerHTML = data;
  //   })
  // }

  // 작동확인
  // function getCategoryByID(id){
  //   $.ajax(`http://172.30.1.14:3000/category/${id}`,{
  //     type: "GET",
  //     dataType: "json",
  //     contentType: "application/json",
  //   }).done(function( data, textStatus, jqXHR ) {
  //     console.log(data);
  //     console.log(textStatus);
  //   });
  // }

  // 내용의값이 들어가지않음
  // 할리스 테스트 controller사용


  // 모든 테스트를 가져오는 함수


  // 내용이 들어간 text박스를 수정
  var testNameEL = document.querySelector("#test-name");
  document.querySelector(`#test-input-btn`).addEventListener("click", () => {
    console.log("찍히나")
    console.log(testNameEL.value)
    setTest({
      test_value: testNameEL.value
    })
  })

});
