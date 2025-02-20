import { useState, useEffect } from "react";

const names = [
  "Wagih Khalifa Abdel Aal", "Souad Mohamed Mohamed", "Hany Abdallah Mahmoud", "Engy Nabil Mahmoud", "Ramy Fawzy Mohamed", "Essam Mahmoud Zafar", "Hatem Ahmed Basyouny", "Shaimaa Ahmed Reyad", "Sayed Mohamed Sayed", "Ashraf Hassanain Taha", "Ehab Ramadan Abdel", "Ahmed Mohamed El Saeed", "Mohamed Mahmoud Ramadan", "Mahmoud Hassan Ahmed", "Abdel Rahman Mohamed", "Milad Eshak Shehata", "Mohamed Abdel Gawwad Abdel Salam", "Amr Mohamed Mahmoud", "Mahmoud Gamil El Shahat", "Omnia Adel Mohamed", "Ahmed Medhat Fadel", "Sherif El Sayed Mahmoud", "Hassan Mohamed Hassan", "El Sayed Ibrahim Mohamed", "Abdel Rahman Omar Salah", "Girgis Farag Selwans", "Ahmed Helmy Kourany", "Mohamed Khaled Ali", "Ahmed Saad Abdel Aziz", "Hossam Sharaf Hamed", "Karam Essam Mohamed", "Ahmed El Sayed Abdel Razek", "Ibrahim Ragab Younes", "Yasser Mohamed Fouad", "Ahmed Ibrahim Mohamed", "Ramy Reda Khalil", "Hussein Hosny Sayed", "Engy Abdel Maseeh Aziz", "Mohamed Ashraf Farhan", "Ali Reda Ali", "Sabry Saad Mohamed", "Mohamed Reda Abdel Salam", "Saleh Madbouly Mahmoud", "Sayed Rabee Sayed", "Ahmed Adel Ahmed", "Anwar Salah Ali", "Mohamed Abdallah Metwally", "Yasmine Abdel Tawab Abdallah", "Moustafa Mahmoud Mohamed", "Mohamed Hamed Ahmed", "Mohamed Saeed Shaban", "Abdel Rahman Sayed Abdel Rahman", "Morsy Sayed Morsy", "Zeyad Emad Eid", "Hossam Hassan Mohamed", "Waleed Khaled Ali", "Ahmed Moustafa Abdel", "Ali Gamal Ismaeel", "Emil Athanasious Emil", "Ehab Saad Mohamed", "Abdel Hady Mokhtar Abdel Salam", "Amr Abdel Rahman Yakoub", "Wael Mohamed Sayed", "Moustafa Mohamed Yousef", "Mohamed El Sayyad Abdel Moniem", "Islam Ibrahim Mortada", "Mahmoud Samir Abdel Rahim", "Ahmed Gamal Fouad", "Emad Abdallah Hussein", "Moustafa Abdel Naby Abdel Azim", "Ahmed Abdallah Mohamed", "Mohamed Magdy Hosny", "Mohamed Nasser Gamaa", "Sayed Salah Sayed", "Belal Omara Mohamed", "Ahmed Zain El Abdeen Ali", "Maged Abdel Halim Mohamed", "Mahmoud Hassan Ibrahim", "Hossam Alaa Hanafy", "Belal Azzam Sedik", "Kareem Abdel Baset Ali", "Mohamed Saeed Mohamed", "Mohamed Atef Mohamed", "Mohamed Ali Abdel Rady", "Moustafa Shahat Mohamed", "Adham Sayed Aboul Azm", "Hagar Mahfouz Ali", "Ramadan Tarek Ramadan", "Ragab Owais Eid", "Mohamed Hassan Mohamed", "Hany Essa Awad", "Ahmed Mahmoud Abbas", "Hazem Hamdy Mohamed", "Hamed Ali Hamed", "Farag Sayed Abdallah", "Mohamed Ramadan Hassan", "Abdallah Mohamed Farahat", "Mahmoud Ahmed Mahmoud", "Ahmed Nasser Abdel Aziz", "Mahmoud Saeed Mahmoud", "Mohamed Ibrahim Mahmoud", "Waleed Mahmoud Mohamed", "Hamada Saeed Metwally", "Maha Mohamed Mahrous", "Ahmed Eid Mohamed", "Aya Bekheet Abdel", "Khaled Saeed Kamal", "Joseph Magdy Shafik", "Osama Mamdouh Saber", "Ibrahim Ahmed Ibrahim", "Reem Ahmed Kamal", "Alaa Samy Abdel", "Moustafa Abdel Halim", "Mohamed Shamandy Abdel Kader", "Ahmed Tarek Mohamed", "Hatem Mohamed Ragab", "Ahmed Fathy Ibrahim", "Moataz Moustafa Salem", "Moustafa Fathy Ali", "Kareem Ahmed Nassary", "Mina Fayek Shaker", "Ahmed Essam Abdel Maksoud", "Eman Sayed Abdel Wahab", "Magdy Fayez Awad", "Ahmed Antar Mohamed", "Eriny Niazy Sobhy", "Abdel Hamid Gamal Abdel Hamid", "Mohamed Eid Abdel Wahed", "Ahmed Essam Mohamed", "Naeem Hamada Naeem", "Mahmoud Fawzy Zaky", "Ashraf El Kady Abdel Aal", "Gamal Abdel Fattah Mohamed", "Saad Moustafa Sultan", "Mahmoud Ahmed Mourad", "Mohamed Atef El Sayed", "Hossam Salama El Sayed", "Islam Mohamed Farouk", "Bahgat Basha Adel", "Ashraf Farouk Sayed", "Alyaa Saber Ibrahim", "Ashraf Salah Abdel Kader", "Mohamed Mohamed Abdel Tawab", "Mohamed Amr Kamal", "Mohamed Kamal Kamal", "Abdel Rahman Ashraf Ahmed", "Atef Eid Mahmoud", "Islam Mohamed Saeed", "Fady Maged Michaeel", "Bishoy Milad Kamel", "Sally Abdel Aal Mohamed", "Radwan Gamal Radwan", "Momen Magdy Ahmed", "Taha Basem Taha", "Ahmed Madbouly Ibrahim", "Shawky Farid Shawky", "Waleed Saeed Ali", "Ahmed Salah ElAbd Elewa", "Yasmine Saad Ibrahim", "Mohamed Reda Abdel Moez", "Ahmed Saber Hanafy", "Zeyad Wael El Husseiny", "Mohamed Ahmed Othman", "Mohamed Gouda Mohamed", "Mahmoud Nabhan Awwad", "Mahmoud Garhy Abdel Rahman", "Hassan Mohamed Hassan", "Abdel Fattah Omar Abdel Fattah"
];
const prizes = [
  "Mobile -Apple 15",
  "Speaker - JBL",
  "Apple AirPods (3rd Generation), Wireless",
  "TV Sharp 32",
  "Kitchen Machine-Moulinex-1000W","Vacuum Cleaner-Hoover- 2000w","Smart Watch -Redmi","Air fryer -Torneedo-3.5 lit","Smart Watch -Huawei","Turkish Coffee Machine -Mienta","Toaster -Sonai","Iron-Philips","Speaker - JBL","Laptop -Del Core i7", "TV LG -43", "Mobile -Samsung Galaxy A55", "Mobile -Vivo Y19s Black", "Microwave -Fresh-28lit", "Vacuum Cleaner-Hoover- 2000w", 
  "Smart Watch -Redmi", "Air fryer -Torneedo-3.5 lit", "Turkish Coffee Machine -Mienta", "Toaster -Sonai", 
  "Sandwich maker -One Life-waffel, grill-1*3/800w", "Iron-Philips", "Mobile -Vivo Y19s Black",
  "Smart Watch -Apple", "Samsung Galaxy TABA9", "Microwave -Sharp-34lit", "TV Sharp 32", "Microwave -Fresh-28lit", "Vacuum Cleaner-Hoover- 2000w", "Vacuum Cleaner -Fresh-1900 w", "Air fryer -Torneedo-3.5 lit", "Smart Watch -Huawei", "Turkish Coffee Machine -Mienta", "Sandwich maker -One Life-waffel, grill-1*3/800w",
  "Iron-Philips", "Vacuum Cleaner -Fresh-1900 w",

];
export default function DrawSimulator() {
  const [remainingNames, setRemainingNames] = useState([]);
  const [remainingPrizes, setRemainingPrizes] = useState([]);
  const [drawnName, setDrawnName] = useState(null);
  const [drawnPrize, setDrawnPrize] = useState(null);
  const [isSwitchingColors, setIsSwitchingColors] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleEffect = (items, setDrawn, callback) => {
    let shuffleCount = 0;
    setIsShuffling(true);

    const shuffleInterval = setInterval(() => {
      const shuffledItems = [...items].sort(() => 0.5 - Math.random()).slice(0, 4);
      setDrawn(shuffledItems[Math.floor(Math.random() * shuffledItems.length)]);
      shuffleCount++;
      if (shuffleCount > 5) { // After 5 shuffles (2 seconds each), stop the shuffle
        clearInterval(shuffleInterval);
        callback();
      }
    }, 1500); // 2 seconds interval for each name
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
    if (remainingNames.length === 0 || remainingPrizes.length === 0) return;

    setIsSwitchingColors(true);

    setTimeout(() => {
      drawRandom(remainingNames, setRemainingNames, setDrawnName);
      setTimeout(() => {
        drawRandom(remainingPrizes, setRemainingPrizes, setDrawnPrize);
        setIsSwitchingColors(false);
      }, 3000); // Wait 4 seconds before drawing the prize
    }, 1000); // Wait 1 second before starting the draw
  };

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === " " && remainingPrizes.length > 0) {
        handleDraw();
      }
    });
    return () => {
      window.removeEventListener("keydown", handleDraw);
    };
  }, [remainingNames, remainingPrizes]);


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
            background-color: #4b5563;
            color: white;
            padding: 1rem 3rem;
            border: none;
            border-radius: 8px;
            font-size: 1.25rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 2rem;
          }

          .reset-button:hover {
            background-color: #374151;
          }

          @media (max-width: 768px) {
            .draw-sections {
              flex-direction: column;
              gap: 1.5rem;
            }

            .draw-section {
              width: 100%;
            }

            .title {
              font-size: 1.75rem;
            }

            .draw-button {
              width: 100%;
            }

            .reset-button {
              width: 100%;
            }
          }
        `}
      </style>

      <h1 className="title">Crowne Plaza Champions League</h1>
      <div className={`draw-sections ${isSwitchingColors ? "switching" : ""}`}>
        <div className="draw-section name">
          <h2 className="section-title">Names</h2>
          <div className="draw-circle name-circle">
            {drawnName || "?"}
          </div>
        </div>

        <div className="draw-section prize">
          <h2 className="section-title">Prizes</h2>
          <div className="draw-circle prize-circle">
            {drawnPrize || "?"}
          </div>
        </div>
      </div>

      <button
        onClick={handleDraw}
        className="draw-button"
        disabled={isShuffling}
      >
        Draw
      </button>

      <button
        onClick={() => {
          setRemainingNames([...names]);
          setRemainingPrizes([...prizes]);
          setDrawnName(null);
          setDrawnPrize(null);
        }}
        className="reset-button"
        disabled={isShuffling}
      >
        Reset Draw
      </button>

      {remainingPrizes.length === 0 && (
        <h2 style={{ color: "red", fontSize: "1.5rem", marginTop: "1rem" }}>
          🎉 Congrats for all the winners 🎉
        </h2>
      )}
    </div>
  );
}
