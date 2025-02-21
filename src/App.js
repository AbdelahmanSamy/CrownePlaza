import { useState, useEffect } from "react";
import {Howl} from 'howler';

const names = [
  "Hisham Nabil Hussein Abdel Hamid", "Nassar Othman Nassar Mousa", "Shady Samir Moustafa Mohamed", "Ahmed Ashraf Salah El Din Hafez El Segainy", "Hend Diaa Diaa Saif El Din Khalifa", "Wagih Khalifa Abdel Aal Ahmed",  
"Souad Mohamed Mohamed Abdel Salam Mohamed Metwally", "Hany Abdallah Mahmoud Hussein", "Essam Moustafa Saad El Din Abdel Rahman Afifi", "Engy Nabil Mahmoud Fahmy Mohamed", "Essam Mahmoud Zafar Abdel Rahim Zafar", "Hassan Yousef Hassan Saleh",  
"Hatem Ahmed Basyouny Omar", "Reem Ibrahim Abdel Rahman Mohamed Daif", "Shaimaa Ahmed Reyad Amin", "Sayed Mohamed Sayed Ahmed Mohamed", "Ashraf Hassanain Taha Salem", "Ehab Ramadan Abdel Khalek Shoeb",  
"Ahmed Mohamed El Saeed Abdel Fattah Ghonaim El Mahallawy", "Mohamed Mahmoud Ramadan Ahmed El Wakeel", "Mahmoud Hassan Ahmed Mohamed", "Abdel Rahman Mohamed Khalifa Hassanain Khamis", "Milad Eshak Shehata Assad", "Mohamed Abdel Gawwad Abdel Salam Abdel Gawwad",  
"Amr Mohamed Mahmoud Afifi", "Mahmoud Gamil El Shahat Shehata", "Omnia Adel Mohamed Abdel Maguid", "Ahmed Medhat Fadel Abdallah Fadl", "Sherif El Sayed Mahmoud El Sayed El Shahed", "Hassan Mohamed Hassan Abou Shamar",  
"El Sayed Ibrahim Mohamed Ibrahim Nashy", "Abdel Rahman Omar Salah El Din Daif", "Girgis Farag Selwans Atallah", "Ahmed Helmy Kourany Kotb", "Mohamed Khaled Ali Mousa Allam", "Ahmed Saad Abdel Aziz Mohamed Zidan",  
"Hossam Sharaf Hamed Moustafa", "Karam Essam Mohamed El Sayed", "Ahmed El Sayed Abdel Razek Soliman", "Ibrahim Ragab Younes El Sayed", "Yasser Mohamed Fouad El Sayed Ali Arab", "Ahmed Ibrahim Mohamed Ibrahim",  
"Ramy Reda Khalil Mohamed Ibrahim", "Hussein Hosny Sayed Afifi", "Engy Abdel Maseeh Aziz Zaky", "Mohamed Ashraf Farhan Mohamed", "Ali Reda Ali Mohamed Abdel Aziz", "Sabry Saad Mohamed Abdel Momen",  
"Mohamed Reda Abdel Salam Abdel Rahman", "Saleh Madbouly Mahmoud Rezk Shaker", "Sayed Rabee Sayed Mohamed", "Ahmed Adel Ahmed Hemaida", "Anwar Salah Ali Shehata Batteekh", "Mohamed Abdallah Metwally Ibrahim",  
"Yasmine Abdel Tawab Abdallah Mohamed Badawy", "Moustafa Mahmoud Mohamed Abdel Maksoud", "Mohamed Hamed Ahmed Mohamed", "Mohamed Saeed Shaban Mohamed Ibrahim", "Morsy Sayed Morsy Sadek", "Zeyad Emad Eid Abdel Wahed Gamil",  
"Hossam Hassan Mohamed Hassan", "Waleed Khaled Ali Ibrahim", "Ahmed Moustafa Abdel Rahim Gad", "Ali Gamal Ismaeel Mohamed Moustafa", "Emil Athanasious Emil Meleek", "Samy El Sayed Ali Ismail",  
"Ehab Saad Mohamed Zaghloul Nasr", "Abdel Hady Mokhtar Abdel Salam Moawad", "Amr Abdel Rahman Yakoub Ayesh", "Wael Mohamed Sayed Mohamed", "Moustafa Mohamed Yousef Bekheet", "Mohamed El Sayyad Abdel Moniem Hamad El Kilany",  
"Islam Ibrahim Mortada Hassan", "Ahmed Gamal Fouad Abdel Samad", "Emad Abdallah Hussein Ahmed", "George Onsy Philips", "Moustafa Abdel Naby Abdel Azim Hassan", "Ahmed Abdallah Mohamed Moustafa El Garbooa",  
"Abdel Khalek Ali Abdel Khalek Saad", "Mohamed Magdy Hosny Fathy", "Mohamed Nasser Gamaa Mahmoud", "Sayed Salah Sayed Ahmed", "Belal Omara Mohamed Hemaida", "Ahmed Zain El Abdeen Ali Abdallah",  
"Maged Abdel Halim Mohamed Awwad", "Mahmoud Hassan Ibrahim Yousef", "Hossam Alaa Hanafy Ahmed", "Belal Azzam Sedik Hassan", "Kareem Abdel Baset Ali Taee", "Mohamed Saeed Mohamed Ali",  
"Mohamed Ali Abdel Rady Omar", "Moustafa Shahat Mohamed Saad", "Adham Sayed Aboul Azm Abdel Hamid", "Hagar Mahfouz Ali Gouda", "Ramadan Tarek Ramadan Abbas", "Ragab Owais Eid Abdel Wahab",  
"Mohamed Hassan Mohamed Gad El Rab", "Hany Essa Awad Mekhaeel", "Wael Ramadan Ahmed Hemdan", "Mohamed Salem Ali El Esawy", "Ahmed Mahmoud Abbas Bekheet", "Hazem Hamdy Mohamed Morsy",  
"Hamed Ali Hamed Ali El Sayed", "Farag Sayed Abdallah Abou Seree", "Mohamed Ramadan Hassan Ali Abdel Maguid", "Abdallah Mohamed Farahat Yousef Abdallah", "Mahmoud Ahmed Mahmoud Mohamed", "Ahmed Nasser Abdel Aziz Abdel Naby",  
"Mahmoud Saeed Mahmoud Ahmed", "Mohamed Ibrahim Mahmoud Ismaeel Amer", "Waleed Mahmoud Mohamed Abou Bakr", "Hamada Saeed Metwally Abou Bakr", "Maha Mohamed Mahrous Hassan", "Ahmed Eid Mohamed Moustafa Khalil",  
"Aya Bekheet Abdel Sayed Bekheet", "Khaled Saeed Kamal Fouad Mohamed El Mahallawy", "Joseph Magdy Shafik El Sayed", "Osama Mamdouh Saber Abdel Moteleb", "Ibrahim Ahmed Ibrahim Hareedy", "Reem Ahmed Kamal Ahmed Abdel Aal Selim",  
"Alaa Samy Abdel Maogoud Ali Hamad", "Moustafa Abdel Halim Ahmed Abdel Wahab", "Mohamed Shamandy Abdel Kader Shamandy", "Ahmed Tarek Mohamed Ahmed", "Hatem Mohamed Ragab Mohamed", "Ahmed Fathy Ibrahim Ahmed",  
"Moataz Moustafa Salem Ali Ali", "Moustafa Fathy Ali Mohamed", "Mina Fayek Shaker Farag", "Ahmed Essam Abdel Maksoud Qayaty", "Eman Sayed Abdel Wahab Ali", "Magdy Fayez Awad Ramadan Naeem",  
"Ahmed Antar Mohamed Antar El Hawwary", "Eriny Niazy Sobhy Tadros", "Abdel Hamid Gamal Abdel Hamid Abdel Azim Mahmoud", "Mohamed Eid Abdel Wahed Ibrahim", "Ahmed Essam Mohamed Abdel Fattah Ibrahim", "Naeem Hamada Naeem Mohamed El Ahdal",  
"Mahmoud Fawzy Zaky Hafez", "Ashraf El Kady Abdel Aal Ali", "Gamal Abdel Fattah Mohamed Mohamed Salem", "Saad Moustafa Sultan Ahmed", "Mahmoud Ahmed Mourad Abdallah", "Mohamed Atef El Sayed Kotb El Zaydy",  
"Hossam Salama El Sayed Mohamed Abdel Maksoud", "Islam Mohamed Farouk Mohamed Mohamed", "Ashraf Farouk Sayed Ali", "Alyaa Saber Ibrahim Ibrahim", "Ashraf Salah Abdel Kader Mohamed", "Mohamed Mohamed Abdel Tawab Emam",  
"Mohamed Amr Kamal Ali Hammam", "Mohamed Kamal Kamal Salem Shalaby", "Abdel Rahman Ashraf Ahmed Mahran", "Atef Eid Mahmoud Hamad", "Islam Mohamed Saeed Abdel Aziz Darwish", "Fady Maged Michaeel Aziz",  
"Bishoy Milad Kamel Awadallah Farag", "Sally Abdel Aal Mohamed Reyad", "Shams Ibrahim Hamed Hussein", "Eman Salah Abdel Hay Sowailam", "Radwan Gamal Radwan Ahmed", "Momen Magdy Ahmed Gomaa",  
"Taha Basem Taha El Kady", "Ahmed Madbouly Ibrahim Madbouly"  
];
const prizes = [
  "Mobile - Apple 15", "Speaker - JBL", "Apple AirPods (3rd Generation), Wireless", "TV Sharp 32", "Kitchen Machine - Moulinex", "Vacuum Cleaner - Hoover",
"Smart Watch - Redmi", "Air Fryer - Tornedo - 4 lit", "Smart Watch - Huawei", "Turkish Coffee Machine - Mienta", "Kitchen Blender - Mienta (offer)", "Iron - Philips",
"Speaker - JBL", "Laptop - Del Core i7", "Smart TV LG - 43", "Mobile - Samsung Galaxy A35", "Mobile - Vivo Y19s Black", "Microwave - Fresh",
"Vacuum Cleaner - Hoover", "Smart Watch - Redmi", "Air Fryer - Tornedo - 4 lit", "Turkish Coffee Machine - Mienta", "Kitchen Blender - Mienta (offer)", "Sandwich Maker - One Life - Waffle, Grill - 1*3/800W",
"Iron - Philips", "Mobile - Vivo Y19s Black", "Smart Watch - Apple", "Samsung Galaxy TABA9 / Ram: 4GB / M: 64GB", "Microwave - Sharp", "TV Sharp 32",
"Microwave - Fresh", "Vacuum Cleaner - Hoover", "Vacuum Cleaner - Fresh", "Air Fryer - Tornedo - 4 lit", "Smart Watch - Huawei", "Turkish Coffee Machine - Mienta",
"Sandwich Maker - One Life - Waffle, Grill - 1*3/800W", "Iron - Philips", "Vacuum Cleaner - Fresh"

];
const clickSound = new Howl({
  src: ["click.mp3"], // Path to your click sound file
  volume: 0.5,
});

const shuffleSound = new Howl({
  src: ["shuffle.mp3"], // Path to your shuffle sound file
  volume: 0.5,
  loop: true, // Loop the shuffle sound during shuffling
});

export default function DrawSimulator() {
  const [remainingNames, setRemainingNames] = useState(names);
  const [remainingPrizes, setRemainingPrizes] = useState(prizes);
  const [drawnName, setDrawnName] = useState(null);
  const [drawnPrize, setDrawnPrize] = useState(null);
  const [isSwitchingColors, setIsSwitchingColors] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [step, setStep] = useState(0); // 0: idle, 1: shuffle prize, 2: shuffle name

  const shuffleEffect = (items, setDrawn, callback) => {
    let shuffleCount = 0;
    setIsShuffling(true);
    shuffleSound.play(); // Play shuffle sound

    const shuffleInterval = setInterval(() => {
      const shuffledItems = [...items].sort(() => 0.5 - Math.random()).slice(0, 4);
      setDrawn(shuffledItems[Math.floor(Math.random() * shuffledItems.length)]);
      shuffleCount++;
      if (shuffleCount > 15) {
        clearInterval(shuffleInterval);
        shuffleSound.stop(); // Stop shuffle sound
        callback();
      }
    }, 70);
  };

  const drawRandom = (items, setItems, setDrawn) => {
    if (items.length === 0) return;
    shuffleEffect(items, setDrawn, () => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const drawnItem = items[randomIndex];
      setDrawn(drawnItem);
      setItems(prevItems => prevItems.filter((_, index) => index !== randomIndex));
    });
  };

  const handleDraw = () => {
    clickSound.play(); // Play click sound on space bar press

    if (step === 0) {
      // Start by shuffling prizes
      setIsSwitchingColors(true);
      setStep(1);
      drawRandom(remainingPrizes, setRemainingPrizes, setDrawnPrize);
    } else if (step === 1) {
      // After prizes are shuffled, shuffle names
      setIsSwitchingColors(true);
      setStep(2);
      drawRandom(remainingNames, setRemainingNames, setDrawnName);
    } else if (step === 2) {
      // Reset for the next draw
      setDrawnName("Who's next");
      setDrawnPrize("Mmmmm 🤔");
      setStep(0);
    }
  };

  useEffect(() => {
    if (remainingPrizes.length === 0) {
      setTimeout(() => {
        alert('🎉 Congrats for all the winners 🎉');
      }, 500);
    }
  }, [remainingPrizes]);

  // Add space bar functionality
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === " " || event.key === "Spacebar") {
        handleDraw();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [step, remainingNames, remainingPrizes]);

  return (
    <div className="draw-simulator">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f4f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .draw-simulator {
            background-color: white;
            border-radius: 16px;
            padding: 3rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
            text-align: center;
          }

          .title {
            font-size: 2rem;
            font-weight: 700;
            color: #1e3a8a;
            margin-bottom: 2rem;
          }

          .draw-sections {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 2.5rem;
          }

          .draw-section {
            background-color: #fff;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            width: 45%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .section-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
          }

          .draw-circle {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 300px;
            margin-bottom: 2rem;
            border-radius: 50%;
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            word-wrap: break-word;
            text-align: center;
            transition: background-color 1s ease;
          }

          .name-circle {
            background-color: #D4AF37;
          }

          .prize-circle {
            background-color: silver;
          }

          .switching .name-circle {
            animation: colorSwitch 0.5s alternate infinite;
          }

          .switching .prize-circle {
            animation: colorSwitch 0.5s alternate infinite;
          }

          @keyframes colorSwitch {
            0% {
              background-color: #ff6f61; /* Red */
            }
            50% {
              background-color: #4db8ff; /* Blue */
            }
            100% {
              background-color: #ff6f61; /* Red */
            }
          }

          .draw-button {
            background-color: #c9a52c;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1.25rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-bottom: 1rem;
          }

          .draw-button:hover {
            background-color: #1e3a8a;
          }

          .reset-button {
            background-color: silver;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1.25rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .reset-button:hover {
            background-color: #e13f3f;
          }
        `}
      </style>
      <div className="title">Crowne Plaza Lucky draw</div>
      <div className="draw-sections">
        <div className="draw-section">
          <div className={`draw-circle name-circle ${isSwitchingColors ? 'switching' : ''}`}>
            {drawnName ? drawnName : "Draw Name"}
          </div>
        </div>
        <div className="draw-section">
          <div className={`draw-circle prize-circle ${isSwitchingColors ? 'switching' : ''}`}>
            {drawnPrize ? drawnPrize : "Draw Prize"}
          </div>
        </div>
      </div>
      <button className="draw-button" onClick={handleDraw}>Start Draw</button>
    </div>
  );
}