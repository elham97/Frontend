document.getElementById("submit-btn").addEventListener("click", function () {
    sendToChatGPT();
  });
  
  
  
  function sendToChatGPT() {
    let value = document.getElementById("word-input").value; /* هذا السطر يستخرج القيمة المدخلة ويخزنها في */
  
    let body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: value }],
  
    };
  
    let headers = {
      Authorization: "Bearer sk-Wa************************", /*APIمصادقة */ 
    };
  /*    POST لإجراء طلب.Axiosهذا الكود يستخدم مكتبة */ 
    axios
      .post("https://api.openai.com/v1/chat/completions", body, {
        headers: headers,
      })
      .then((response) => {
        let reply = response.data.choices[0].message.content;
        document.getElementById("reply-content").textContent = reply;
      });
  }