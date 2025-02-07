## 📌 git-github-odev

AkademiQ Staj programı eğitimi içerisinde verilmiş olan **Git ve Github kullanımına yönelik ödevin uygulanacağı repository**.

---

### 📌 Hazırlayan:
**İlker Yılmaz**  
**📅 Hazırlama Tarihi:** 07.02.2025  

---

## 🚀 Ödev Konusu: Git & GitHub Kullanımı  

Bu repository, Git ve GitHub ile ilgili temel işlemleri adım adım uygulamak amacıyla oluşturulmuştur. Aşağıda gerçekleştirilen aşamalar detaylandırılmıştır.

---

## 🔥 Gerçekleştirilen Adımlar  

### 1⃣ **Git Kurulumu**  
[Git resmi web sitesi](https://git-scm.com/downloads) üzerinden sistemime uygun versiyonu indirerek **Git kurulumunu tamamladım**.  

### 2⃣ **GitHub Üzerinde Yeni Bir Repository Oluşturma**  
GitHub hesabımda yeni bir repository oluşturdum.  

### 3⃣ **Repository'i Klonlama**  
Oluşturduğum repository'i **Git Bash kullanarak** local makinama klonladım.  

### 4⃣ **Proje Yapısının Oluşturulması**  
- `backend` ve `client` olmak üzere iki ana klasör oluşturdum.  
- **Backend içerisinde bir server başlattım** ve ilk commit ile GitHub’a gönderdim.  

### 5⃣ **Hard Reset İşlemi**  
Proje klasörleri tam olarak istediğim gibi yapılandırılmadığı için **initial commit'e hard reset attım**.  

### 6⃣ **Eksiklerin Giderilmesi ve Yeni Commit**  
Hard reset sonrası eksiklikleri tamamlayarak **yeni bir commit oluşturdum ve push ettim**.  

### 7⃣ **Branch Yapısının Oluşturulması**  
- Geliştirme sürecini yönetmek için **develop** isimli yeni bir branch açtım ve GitHub’a gönderdim.  
- **Backend geliştirmelerini** `develop` branch’ine commit edip pushladım.  
- **Client geliştirmelerini** `develop` branch’ine commit edip pushladım.  

### 8⃣ **Develop Branch’inin Main ile Birleştirilmesi**  
Tüm geliştirmeler tamamlandıktan sonra **develop branch’ini main branch’ine merge ettim**.  

---

## 📂 Repository İçeriği  

- **Branch Yapısı:** `main` ve `develop` olmak üzere **iki adet branch** bulunmaktadır.  
- **Commit Sayısı:** Toplamda **6 commit** yapılmıştır.  
- **Proje Yapısı:** `client` ve `backend` klasörleri ile **çalışır bir proje** oluşturulmuştur.  
- **Ödev Kapsamı:** Tüm gereksinimler eksiksiz şekilde tamamlanmış ve belgelenmiştir.  

---

## 🗄 Projenin Çalışır Görseli  

_Aşağıda projenin çalışır bir görüntüsü paylaşılmıştır:_  

![{E7252371-27E2-4446-A9FF-0A275ECB9BDE}](https://github.com/user-attachments/assets/3626c12b-5961-42fa-b53f-404c8f538e13)
![{270F6CF3-A888-4C9D-B7CE-CB7FBA97FB7D}](https://github.com/user-attachments/assets/6c1273a1-58cf-4710-bc67-f3e66604d114)
![{4630D477-1F35-4826-B0DF-548FDC1206D8}](https://github.com/user-attachments/assets/29077e7e-519e-424a-9585-100c21528ca8)

---

## 🛠️ Kurulum ve Çalıştırma  

1. Repository'yi klonlayın:  
   ```bash
   git clone https://github.com/kullanici_adi/git-github-odev.git
   ```
2. Backend klasörüne gidip, .env içerisinde DATABASE_URL'i belirtin, veritabanı tablosunu oluşturun ve sunucuyu başlatın:  
   ```bash
   cd backend
   npm install
   npm start
   ```
3. Client klasörüne gidip uygulamayı başlatın:  
   ```bash
   cd client
   npm install
   npm start
   ```
4. Tarayıcıda **http://localhost:3000** adresinden projeyi görüntüleyin.  

