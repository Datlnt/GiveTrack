# 🎯 GiveTrack – Charity DApp

Ứng dụng web cho phép người dùng quyên góp Ethereum (ETH) cho tổ chức từ thiện thông qua ví MetaMask. Dự án được phát triển bằng ReactJS và tích hợp Web3 thông qua Ethers.js.

---

## 📌 Mục lục

- [Tính năng chính](#-tính-năng-chính)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Hướng dẫn cài đặt & chạy](#-hướng-dẫn-cài-đặt--chạy)
- [Kết nối MetaMask](#-kết-nối-metamask)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Ghi chú](#-ghi-chú)
- [Đóng góp](#-đóng-góp)
- [Giấy phép](#-giấy-phép)

---

## 🚀 Tính năng chính

- Kết nối với ví MetaMask
- Nhập số ETH muốn quyên góp
- Gửi ETH đến ví từ thiện (smart contract)
- Hiển thị địa chỉ ví người dùng
- Thông báo khi giao dịch thành công

---

## 🛠️ Công nghệ sử dụng

- **ReactJS:** Giao diện người dùng
- **Ethers.js:** Tương tác blockchain Ethereum
- **MetaMask:** Tiện ích ví người dùng
- **Solidity (tuỳ chọn):** Mã hợp đồng thông minh (nếu tích hợp nâng cao)

---

## 📦 Hướng dẫn cài đặt & chạy

### 1. Cài đặt Node.js  
Tải và cài tại: [https://nodejs.org](https://nodejs.org)

### 2. Tải và chạy dự án
```bash
git clone https://github.com/Datlnt/GiveTrack.git
cd GiveTrack
npm install
npm start
```

Truy cập ứng dụng tại: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Kết nối MetaMask

- Cài MetaMask extension tại [https://metamask.io](https://metamask.io)
- Mở ứng dụng, bấm nút **Connect Wallet**
- Nhập số ETH vào ô và bấm **Donate**
- MetaMask sẽ hiển thị cửa sổ xác nhận giao dịch

---

## 📁 Cấu trúc thư mục

```
GiveTrack/
├── public/                 # File tĩnh HTML
│   └── index.html
├── src/                    # Mã nguồn React
│   ├── App.js              # Thành phần chính
│   ├── index.js            # Điểm khởi chạy React
│   └── components/         # (nếu có) các component nhỏ
├── .gitignore              # Bỏ qua node_modules khi push lên GitHub
├── package.json            # Danh sách thư viện sử dụng
├── README.md               # File mô tả dự án (chính là file này)
```

---

## ✅ Ghi chú

- Đã loại bỏ `node_modules/` khỏi GitHub để tránh nặng repo
- Có thể thay đổi địa chỉ contract hoặc ví từ thiện trong `App.js`
- Dự án có thể được nâng cấp thêm chức năng như xác minh milestone, theo dõi real-time, backend Node.js,...

---

## 🤝 Đóng góp

Chào đón mọi đóng góp!  
Hãy fork dự án, tạo Pull Request hoặc mở Issue nếu bạn có ý tưởng cải tiến.

---

## 📄 Giấy phép

Dự án này được phát hành theo [MIT License](LICENSE).
