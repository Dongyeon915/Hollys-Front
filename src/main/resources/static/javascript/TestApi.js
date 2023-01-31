const host = "http://localhost:3000"

export const setTest = (jsonData) => {
  $.ajax(`${host}/tests/settest`, {
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(jsonData)
  }).done((data, textStatus, jqXHR) => {
    console.log(data)
  })
}

export const getTest = () => {
  $.ajax("http://172.30.1.14:3000/tests/alltest", {
    contentType: "application/json",
  }).done((data, textStatus, jqXHR) => {
    console.log(data)
  })
}

export const putTest = (jsonData) => {
  $.ajax("http://172.30.1.14:3000/tests/put", {
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

export const deleteTest = (id) => {
  $.ajax(`${host}/tests/${id}`, {
    method: "DELETE"
  }).done((data, textStatus, jqXHR) => {
    console.log(data)
  })
}