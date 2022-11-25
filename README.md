# 把又臭又長的網站變成簡單好記的短網址工廠!!


## 網站畫面
![MyImage]https://github.com/kai3kai2/shortener_url/blob/main/picture/v1.0.jpg

## Introduce
這是一個可以將一大長串的網址變身成簡短好記的網址

### 功能介紹
+ 將網址貼在輸入欄按下Shorten鍵即生產。
+ 右邊就是生產好的短網址，點擊連結可以前往網站，點擊複製可以把做好的網址複製起來


## 使用本專案
1. 先確認有安裝 Node.js 與 npm


2. 使用 clone 載入到本地資料，使用 Terminal 輸入指令

```
git clone <HTTPS>
```


3. 安裝npm套件，使用 Terminal 輸入指令

```
npm install 
```

4. 新增.env檔案並設置資料庫連線字串，

```
MONGODB_URL=mongodb+srv://<account>:<password>@cluster0.<xxxxx>.mongodb.net/<table>?retryWrites=true&w=majority
```

5. 啟用專案: 在 Terminal 請輸入以下指令

```
npm run dev
```

6. 若成功運行會出現以下文字，右邊網址可以前往

```
Your Express is running on http://localhost:${3000}
```

7. 欲暫停此專案在 Terminal 使用 :

```
ctrl + c (windows)
command + c (mac)
```

## 開發工具
+ Node.js 4.16.0
+ Express 4.17.1
+ Express-Handlebars 4.0.2
+ Bootstrap 5.2.2
+ Font-awesome 6.2.0
+ mongoose 6.7.3