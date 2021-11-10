
      var messages = [];
      function createMulitpleH1() {
        fetch("https://60df0afcabbdd9001722d1d9.mockapi.io/movies/messages")
          .then((response) => response.json())
          .then((data) => {
            messages = data;
            parseData(data);
          });
      }
      function parseData(data) {
        let container = document.getElementById("messages");
        container.innerHTML = "";
        data.forEach((element) => {
          let messageTag = document.getElementById("messages");
          let wrapperDiv = document.createElement("div");
          wrapperDiv.className = "wrapper";
          let h1Tag = document.createElement("h1");
          let messageParaTag = document.createElement("p");
          let imgTag = document.createElement("img");
          imgTag.src = element.avatar;
          messageParaTag.innerHTML = element.message;
          h1Tag.innerHTML = element.name;
          wrapperDiv.appendChild(h1Tag);
          wrapperDiv.appendChild(messageParaTag);
          wrapperDiv.appendChild(imgTag);
          messageTag.appendChild(wrapperDiv);
        });
      }
      function filter() {
        let filterTag = document.getElementById("filter-tag").value;
        const result = messages.filter((word) => word.name.includes(filterTag));
        parseData(result);
        console.table(result);
      }
      // let messageTag = document.getElementById("messages");
      // let h1Tag = document.createElement("h1");
      // h1Tag.innerHTML = "Hello";
      // messageTag.appendChild(h1Tag);
    