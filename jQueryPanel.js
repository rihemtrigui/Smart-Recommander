(function () {
     
        const script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        script.onload = function() {

    const body = $('body');

    const classes = {
        sideBar: 'ins-custom-sidebar-123',
        overlay: 'ins-overlay-123',
        optionsNav: 'ins-options-nav-123',
        closeButton: 'ins-close-button-123',
        closeButtonOptionsNav :'ins-close-button-options-nav-123',
        returnButton: 'ins-return-button-123',
        recommender: 'ins-recommender-123',
        image: 'ins-image-123',
        text: 'ins-text-123',
        button: 'ins-button-123',
        options: 'ins-options-123',
        slidebarOption: 'ins-slidebar-option-123',
        toggle: 'ins-toggle-123',
        toggleSwitch: 'ins-toggle-switch-123',
        inline: 'ins-inline-123',
        Switch: 'ins-switch-123',
        displayProducts: 'ins-display-products-123',
        productCard: 'ins-product-card-123',
        productImage: 'ins-product-image-123',
        productInfo: 'ins-product-info-123',
        productName: 'ins-product-name-123',
        productPrice: 'ins-product-price-123',
        swiperContainer: 'ins-swiper-container-123',
        swiperWrapper: 'ins-swiper-wrapper-123',
        swiperButtonNext: 'ins-swiper-button-next-123',
        swiperButtonPrev: 'ins-swiper-button-prev-123',
        sliderRound: 'ins-slider-round-123',
        inlineFeatures: 'ins-inline-features-123',
        inlineInput: 'ins-inline-input-123',
        inputOptions: 'ins-append-options-123',
        label: 'ins-label-123',
        input: 'ins-input-123',
        inputError: 'ins-input-error-123',
        classError: 'ins-class-error-123',
        productSlide:'ins-swiper-slide-123',
        productsInput:'ins-products-input-123',
        productTypeSelection:'ins-products-type-selection-123',
        productsNumberInput:'ins-products-number-input-123',
        inputNumberError:'ins-input-number-error-123',
        choices:'ins-choices-123',
        couponText:'ins-coupon-text-123',
        couponPopup:'ins-coupon-popup-123',
        couponNav:'ins-coupon-nav-123',
        couponOptions:'ins-coupon-options-123',
        closeButtonCouponNav:'ins-close-button-coupon-nav-123',
        returnCouponButton:'ins-return-coupon-button-123',
        titleInput:'ins-title-input-123',
        sliderTitle:'ins-slider-title-123',
        inputTitleError:'ins-title-error-123',
        couponChoices:'ins-coupon-choices',
        couponInputSelection:'ins-coupon-input-selection-123',
        couponSelectionTitle:'ins-coupon-title-selection-123',
        couponPopupContent:'ins-coupon-popup-content-123',
        coupon:'ins-coupon-123',
        closeCouponButton:'ins-close-coupon-button-123',
        showCouponButton:'ins-show-coupon-button-123',
        couponForm:'ins-coupon-form-123',
        couponPopupText:'ins-coupon-popup-text-123',
        revealCodeButton:'ins-reveal-code-button-123',
        couponCode:'ins-coupon-code-123',
        closeCouponCodeButton:'ins-close-coupon-code-button-123',
        CodeSection:'ins-code-section-123',
        copyCodeButton:'ins-copy-code-button-123',
        couponCenter:'ins-coupon-center-123',
        couponCodeText:'ins-coupon-code-text-123',
        couponCodeTitle:'ins-coupon-text-title-123',
        couponLeft:'ins-coupon-left-123',
        copyValue:'ins-copy-value-123',
        couponHeader:'ins-coupon-header-123',
        couponInputField:'ins-coupon-input-field-123',
        codeInput:'ins-code-input-123',
        codeError:'ins-code-error-123',
        popupCloseButton:'ins-popup-close-button-123',
        recommenderContainer:'ins-recommender-container-123',
        couponPopupContainer:'ins-coupon-popup-container-123',
        sliderSettings:'ins-slider-settings-123',
        couponSettingsTitle:'ins-coupon-settings-title-123'
    };

    const selectors = Object.keys(classes).reduce((acc, key) => {
        acc[key] = `.${classes[key]}`;
        return acc;
    }, {});


    function init() {
        renderHtml();
        renderCSS();
        addEventListeners();
    }

    function renderHtml() {
        const { sideBar, closeButton, recommender, text, image, button, optionsNav, options, closeButtonOptionsNav, returnButton, slidebarOption, toggle, inline, Switch, toggleSwitch,
            sliderRound, displayProducts, overlay, swiperContainer, swiperWrapper, swiperButtonNext, swiperButtonPrev, inlineFeatures, inlineInput, inputOptions, label, inputError, 
            input, classError,productsInput,productTypeSelection,productsNumberInput,inputNumberError,choices,couponText,couponPopup,couponNav,couponOptions,closeButtonCouponNav,
            returnCouponButton,titleInput,inputTitleError,sliderTitle,couponChoices,couponInputSelection,couponSelectionTitle,couponPopupContent,coupon,closeCouponButton,
            showCouponButton,couponForm,couponPopupText,revealCodeButton,couponCode,closeCouponCodeButton,CodeSection,copyCodeButton,couponCenter,couponCodeText,couponCodeTitle,couponLeft,
            copyValue,couponHeader,codeInput,codeError,popupCloseButton,recommenderContainer,couponPopupContainer,sliderSettings,couponSettingsTitle} = classes
        const outerHtml = `
             <div class="${sideBar}">
                <a href="#" class="${closeButton}">×</a>
                <div class="${recommenderContainer}">
                  <div class="${recommender}">
                    <img src="https://static.thenounproject.com/png/2662030-200.png" alt="" height="40px" width="30px" style="padding-top:15px" >
                    <a href="#" class="${text}">Slider Generator</a>
                  </div>
                </div>
                <div class="${couponPopupContainer}">
                  <div class="${couponPopup}">
                     <img src="https://static-00.iconduck.com/assets.00/coupon-icon-2048x1281-jrkntosz.png" alt="" height="38px" width="33px" style="padding-top:15px">
                     <a href="#" class="${couponText}">Coupon Generator</a>
                  </div>
                </div>
            </div>
            <div class="${couponNav}">
                <div class="${couponOptions}">
                    <p href="#" class="${closeButtonCouponNav}">×</p>
                    <p href="#" class="${returnCouponButton}">←</p>
                    <p href="#" class="${couponSelectionTitle}">Choose coupon's settings :</p>
                    <p class="${couponSettingsTitle}">Coupon's inputs :</p>
                    <div class="${couponInputSelection}">
                    <label>
                    <input type="checkbox" name="inputName" value="name" class="${couponChoices}"> Name
                    </label>
                    <label>
                    <input type="checkbox" name="inputName" value="lastname" class="${couponChoices}"> Lastname
                    </label>
                    <label>
                    <input type="checkbox" name="inputName" value="email" class="${couponChoices}"> Email
                    </label>
                    <label>
                    <input type="checkbox" name="inputName" value="phone-number" class="${couponChoices}"> Phone Number
                    </label>
                    </div>
                    <p class="${couponSettingsTitle}">Coupon's code :</p>
                    <div>
                      <input type="text" class="${codeInput}" placeholder="Enter the coupon code :">
                    </div> 
                    <p class="${codeError}" style="display:none;">Please enter a code </p>
                    <button class="${showCouponButton}">Show Coupon Popup</button>
              </div>
            </div>
            <div class="${coupon}" style="display:none;">
                <div class="${couponPopupContent}">
                    <div class="${couponHeader}">
                      <button class="${closeCouponButton}">×</button>
                      <div class="${couponPopupText}"><p>Save 50% on your first odrer !</p></div>
                    </div>
                    <form class="${couponForm}">
                    </form>
                    <button class="${revealCodeButton}">Reveal my code</button>
                </div>
            </div>
             <div class="${couponCode}" style="display:none;">
                <button class="${closeCouponCodeButton}">×</button> 
                <div class="${couponLeft}">
                    <div>Expires : Aug 09, 2024</div>
                </div>
                <div class="${couponCenter}"> 
                    <div>           
                        <h2 class="${couponCodeText}">ENJOY YOUR</h2>
                        <h3 class="${couponCodeTitle}">Coupon</h3> 
                        <div class="${CodeSection}">
                          <input class="${copyValue}" type="text" readonly />
                          <button class="${copyCodeButton}">COPY</button>
                        </div>
                    </div>           
                </div>             
                
            </div>
            <div class="${image}">
                <img src="https://cdn-icons-png.freepik.com/512/1582/1582286.png" class="${button}" allow="autoplay">
            </div>
            <div class="${optionsNav}">
                <div class="${options}">
                    <p href="#" class="${closeButtonOptionsNav}">×</a>
                    <p href="#" class="${returnButton}">←</a>
                </div>
                 <div class="${slidebarOption}">
                    <p class="${sliderSettings}"href="#">Choose slider's settings :</p>
                    <a href="#">Products type :</a>
                    <div class="${productTypeSelection}">
                    <label>
                    <input type="radio" name="productType" value="top-sellers" class="${choices}"> Top Sellers
                    </label>
                    <label>
                    <input type="radio" name="productType" value="most-popular" class="${choices}"> Most Popular
                    </label>
                    </div>
                    <a href="#">Slider's title :</a>
                    <div class="${titleInput}">
                      <input type="text" placeholder="Enter a title :">
                      <div class="${inputTitleError}">
                         <p>Please enter a title !</p>
                      </div>
                    </div>  
                    <a href="#">Products' number :</a>
                    <div class="${productsInput}">
                       <input type="number" class="${productsNumberInput}" placeholder="Enter the products number :">
                       <div class="${inputNumberError}">
                         <p>Please enter a valid number (between 1-20) !</p>
                       </div>
                    </div> 
                    <a href="#">Slider's type :</a>
                    <div class="${toggle}">
                      <div class="${inline}">Popup</div>
                      <label class="${Switch}">
                            <input type="checkbox" class="${toggleSwitch}">
                            <span class="${sliderRound}"></span>
                      </label>
                      <div class="${inline}">Inline</div>                   
                    </div>
                    <div class="${inlineFeatures}">
                      <div class="${inlineInput}">
                       <input type="text" placeholder="Enter a classname :">
                      </div> 
                      <div class=${input}">                    
                       <select name="inline-options"class=${inputOptions}>
                            <option value="append">Append</option>
                            <option value="prepend">Prepend</option>
                            <option value="after">After</option>
                            <option value="before">Before</option>
                       </select>
                      </div>
                      <div class="${inputError}"><p>Please enter a classname !</p></div>
                      <div class="${classError}"><p>This classname does not exist !</p> </div> 
                    </div> 
                    <button class="${displayProducts}">Display products</button>
            
                </div>
            </div>
            <div class="${overlay}"></div>
            <div class="${swiperContainer}">
                <div class="${popupCloseButton}">x</div>
                <div class="${sliderTitle}"></div>
                <div class="${swiperWrapper}"></div>
                <div class="${swiperButtonNext}">></div>
                <div class="${swiperButtonPrev}"><</div>
            </div>  
        `;
        body.append(outerHtml);
        
    }
    function renderCSS() {
        const styleElement = $('<style></style>');
        const { slidebarOption, toggle, inline, Switch, sliderRound, displayProducts, overlay, image, button,sideBar, closeButton,
            closeButtonOptionsNav,returnButton,recommender, swiperWrapper,productCard, productImage,productInfo, productName,
            productPrice, swiperButtonNext,swiperButtonPrev,optionsNav, options,inlineFeatures, inputError, inputOptions,
            inlineInput, label, classError, input,productTypeSelection,productsInput,inputNumberError,productsNumberInput,couponPopup,
            couponNav,closeButtonCouponNav,returnCouponButton,inputTitleError,titleInput,couponSelectionTitle,couponInputSelection,couponChoices,
            coupon,showCouponButton,couponPopupText,revealCodeButton,closeCouponButton,couponCode,code,closeCouponCodeButton,codeSection,copyCodeButton,
            couponCenter,couponCodeText,couponCodeTitle,couponLeft,copyValue,couponHeader,couponInputField,codeError,codeInput,popupCloseButton,
            recommenderContainer,couponPopupContainer,sliderSettings,couponSettingsTitle} = selectors;
        styleElement.text(`

            ${couponSettingsTitle}{
                text-decoration: none;
                font-size: 20px;
                color: #193db0;
                display: block;
                transition: 0.3s;
                font-weight: bold;
                margin-top: 16px;
                margin-left: 10px;
                margin-bottom: 10px;
            }

            ${sliderSettings}{
                font-weight:bold;
                font-size:23px;
                margin-top: 10px;
                margin-bottom: 35px;
                text-align:center;
            }

            ${popupCloseButton}{
                display:none;
            }

            ${codeError}{
                color: red;
                font-size: 1em;
                margin-left: 32%;
            }

            ${couponHeader}{
                background-color:#000;
            }

            ${codeSection}{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 20px 0;
            }

            ${copyValue} {
                padding: 7px;
                font-size: 15px;
                border: 1px solid #ccc;
                border-radius: 5px;
                margin-right: 10px;
                width: 150px;
                text-align: center;
            }

            ${copyCodeButton} {
                padding: 8px;
                font-size: 16px;
                color: #fff;
                background-color: black;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            ${copyCodeButton}:hover {
                background-color: #0056b3;
            }

            ${copyCodeButton}:active {
                background-color: #004494;
            }

            ${couponCode} {
                width: 400px;
                height: 200px;
                border-radius: 10px;
                overflow: hidden;
                margin: auto;
                filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.5));
                display: flex;
                align-items: stretch;
                position: relative;
                text-transform: uppercase;
            }
            ${couponCode}::before,
            ${couponCode}::after {
                content: "";
                position: absolute;
                top: 0;
                width: 50%;
                height: 100%;
                z-index: -1;
            }

            ${couponCode}::before {
                left: 0;
                background-image: radial-gradient(
                circle at 0 50%,
                transparent 25px,
                #ebeae3 26px
            );
            }

            ${couponCode}::after {
                right: 0;
                background-image: radial-gradient(
                circle at 100% 50%,
                transparent 25px,
                #abc2ed 26px
            );
            }
            ${couponCode} > div {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            ${couponLeft} {
                width: 20%;
                border-right: 2px dashed rgba(0, 0, 0, 0.13);
            }
            ${couponLeft} div {
                transform: rotate(-90deg);
                white-space: nowrap;
                font-weight: bold;
            }

            ${couponCenter}{
                flex-grow: 1;
                text-align: center;
            }

            ${couponCodeText} {
                background: #000;
                color: white;
                padding: 0 10px;
                font-size: 28px;
                white-space: nowrap;
            }

            ${couponCodeTitle} {
                font-size: 2.15rem;
            }

            ${code} {
                border: 1px solid #ccccccc4;;
                height:40px;
                display:flex;
                align-items:space-between;
                margin-top:30px;
            }

            ${couponCode} {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                border-radius: 10px;
                z-index: 9000;
                width: 350px;
            }
            ${closeCouponCodeButton}{
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 20px;
                color: #000;
                cursor: pointer;
            }

            ${closeCouponButton}{
                position: absolute;
                top: 10px;
                right: 10px;
                background: none;
                border: none;
                font-size: 20px;
                color: #000;
                cursor: pointer;
            }
            ${couponInputField} label {
                display: block; 
                margin-bottom: 8px; 
                font-size:20px;
            }
            ${couponInputField}{
                margin-top:10px;
            }
            ${couponInputField} input {
                display: block; 
                width: 100%; 
                height:32px;
                border-radius: 4px;
                border: none;
            }
            ${revealCodeButton} {
                margin-top: 30px;
                font-size: 18px;
                border-radius: 13px;
                cursor: pointer;
                padding: 5px 15px;
                background-color: black;
                color: white;
                border: none;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                transition: background-color 0.3s, transform 0.3s;
                margin-left:85px;
            }
            ${revealCodeButton}:hover {
                background-color: #0056b3;
                transform: translateY(-2px);
            }
            ${revealCodeButton}:active {
                background-color: #004494;
                transform: translateY(0);
            }
            ${revealCodeButton}:focus {
                outline: none;
                box-shadow: 0px 0px 0px 3px rgba(0, 123, 255, 0.5);
            }
            ${couponPopupText}{
                text-align:center;
                font-size:25px;
                font-weight:bold;
                color:white;
            }

            ${showCouponButton} {
                margin-top: 30px;
                font-size: 18px;
                border-radius: 13px;
                cursor: pointer;
                padding: 5px 15px;
                background-color: #007bff;
                color: white;
                border: none;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                transition: background-color 0.3s, transform 0.3s;
                margin-left:19%;
            }
            ${showCouponButton}:hover {
                background-color: #0056b3;
                transform: translateY(-2px);
            }
            ${showCouponButton}:active {
                background-color: #004494;
                transform: translateY(0);
            }
            ${showCouponButton}:focus {
                outline: none;
                box-shadow: 0px 0px 0px 3px rgba(0, 123, 255, 0.5);
            }
            ${coupon} {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #abc2ed;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                z-index: 9000;
            }

            ${couponSelectionTitle} {
                font-weight: bold;
                font-size: 23px;
                margin-top: 10px;
                margin-bottom: 35px;
                text-align: center;
                display: block; 
                text-decoration:none;
                color:black;
            }

            ${couponInputSelection} {
                margin-left:20px;
                display: flex;
                flex-direction: column;
                gap: 8px; 
            }

            ${couponInputSelection} label {
                display: flex;
                align-items: center;
                gap: 8px; 
                font-size: 20px;
                color: #555;
            }

            ${couponChoices} {
                margin-right: 10px;
            }
            @media (max-width: 400px) {

                ${revealCodeButton} {
                    margin-left: 10px;
                    padding: 5px;}
                    
                ${couponPopupText}{
                font-size: 20px;}         
            }

            ${codeInput}{
                width: 170px;
                padding: 8px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin-left: 25%;
            }
                
            ${titleInput} input {
                width: 80%;
                margin-left: 8% ;
                padding: 8px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            
            ${inputTitleError} {
                color: red;
                font-size: 1em;
                display: none; 
                text-align:center;
            }
 
            ${productTypeSelection} {
                margin-bottom: 20px;
                margin-left:8%;
            }
            ${productTypeSelection} input{
                margin-right:5px; 
            }

            ${productTypeSelection} label {
                cursor: pointer;
                 font-size:18px;
                 color:#333;
            }
            ${productsNumberInput}::-webkit-outer-spin-button,
            ${productsNumberInput}::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }
            ${productsNumberInput} {             
                width: 80%;
                margin-left: 8%;
                padding: 8px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            ${productsInput} {
                margin-bottom: 20px; 
                
            }
            ${inputNumberError} {
                color: red;
                font-size: 1em;
                display:none
            }

            ${classError} {
                color: red;
                font-size: 1em;
                display:none
            }
            ${inlineFeatures} {
                display: flex;
                flex-direction: column;
                margin: 20px 0;
                display:none
            }
            ${input}{
                margin-top:30px;
                }
            ${inlineInput} {
                margin-bottom: 10px;
            }

            ${inlineInput} input {
                width: 80%;
                padding: 8px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin-left: 8%;
            }

            ${label} {
                margin-bottom: 5px;
                font-weight: bold;
            }

            ${inputOptions} {
                width: 80%;
                padding: 8px;
                box-sizing: border-box;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin-left: 8%;
            }

            ${inputError} {
                color: red;
                font-size: 1em;
                display: none; 
                text-align:center;
            }
      
            ${slidebarOption} {
                display:flex;
                flex-direction: column;
                margin-top: 20px;
                margin-left: 10px;
            }
            ${slidebarOption} a {
                font-size: 23px;
                color: #333;
                text-decoration: none;
                margin-bottom: 10px;
            }
            ${toggle} {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                margin-left: 19%;
            }
            ${inline} {
                font-size: 18px;
                color: #333;
                margin: 0 10px;
            }
            ${Switch} {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 25px;
            }
            ${Switch} input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            ${sliderRound} {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                transition: .4s;
                border-radius: 34px;
            }
            ${sliderRound}:before {
                position: absolute;
                content: "";
                height: 21px;
                width: 21px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
            }
            input:checked + ${sliderRound} {
                background-color: #007bff;
            }
            input:checked + ${sliderRound}:before {
                transform: translateX(24px);
            }
            ${displayProducts} {
                margin-top: 20px;
                font-size: 18px;
                border-radius: 13px;
                cursor: pointer;
                padding: 5px 15px;
                background-color: #007bff;
                color: white;
                border: none;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                transition: background-color 0.3s, transform 0.3s;
                width: 60%;
                margin-left: 20%;
            }
            ${displayProducts}:hover {
                background-color: #0056b3;
                transform: translateY(-2px);
            }
            ${displayProducts}:active {
                background-color: #004494;
                transform: translateY(0);
            }
            ${displayProducts}:focus {
                outline: none;
                box-shadow: 0px 0px 0px 3px rgba(0, 123, 255, 0.5);
            }
            ${overlay} {
                display: none;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 8888;
                background-color: rgba(128, 128, 128, 0.5);
                opacity: 0.5;
            }
            ${image} {
                height: 32px;
                width: 32px;
                position: fixed;
                right: 20px;
                bottom: 150px;
                z-index: 8888;
            }
            ${options} {
                display: flex;
                justify-content: space-between;
            }
            ${optionsNav} {
                height: 100%;
                width: 0;
                position: fixed;
                z-index: 9001;
                top: 0;
                right: 0;
                background-color: #F1F1F1;
                overflow-x: hidden;
                padding-top: 60px;
            }
            ${couponNav} {
                height: 100%;
                width: 0;
                position: fixed;
                z-index: 9001;
                top: 0;
                right: 0;
                background-color: #F1F1F1;
                overflow-x: hidden;
                padding-top: 60px;
            }
            ${optionsNav} a {
                text-decoration: none;
                font-size: 20px;
                color: #193db0;
                display: block;
                transition: 0.3s;
                font-weight: bold;
                margin-top: 16px;
            }
            ${button} {
                cursor: pointer;
                height: 50px;
                width: 50px;
            }
            ${sideBar} {
                height: 100%;
                width: 0;
                position: fixed;
                z-index: 9000;
                top: 0;
                right: 0;
                background-color: #F1F1F1;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
            }
            ${sideBar} a {
                text-decoration: none;
                font-size: 25px;
                color: #000000;
                display: block;
                transition: 0.3s;
            }
            ${closeButton} {
                position: absolute;
                top: 25px;
                right: 20px;
                text-decoration: none;
                font-size: 25px;
                color: #000000;
                display: block;
                transition: 0.3s;
            }
            ${closeButtonOptionsNav} {
                position: absolute;
                top:0px;
                right: 20px;
                text-decoration: none;
                font-size: 25px;
                color: #000000;
                display: block;
                transition: 0.3s;
                cursor:pointer;
            }
            ${closeButtonCouponNav} {
                position: absolute;
                top: 0px;
                right: 20px;
                font-size: 25px;
                color: #000000;
                display: block;
                transition: 0.3s;
                cursor:pointer;
            }
            ${returnCouponButton} {
                position: absolute;
                top: 0px;
                left: 10px;
                display: block;
                transition: 0.3s;
                font-size:25px;
                cursor:pointer;
            }
                
            ${returnButton} {
                position: absolute;
                top:0px;
                left: 10px;
                text-decoration: none;
                font-size: 25px;
                color: #000000;
                display: block;
                transition: 0.3s;
                cursor:pointer;
            }

            ${recommenderContainer}{
                height:60px;           

            }
            ${recommenderContainer}:hover{
                background-color: #00000008;             

            }
            ${recommender} a {
                text-decoration: none;
                font-size: 25px;
                color: #000000;
                display: block;
                transition: 0.3s;
                padding-top:15px;
            }
            ${couponPopupContainer}{
                height:60px;           

            }
            ${couponPopupContainer}:hover{
                background-color: #00000008;              

            }
            ${couponPopup} a {
                text-decoration: none;
                font-size: 25px;
                color: #000000;
                display: block;
                transition: 0.3s;
                padding-top:15px;

            }
            ${couponPopup} {
                margin-top: 40px;
                margin-left: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            ${button} {
                background-color:white;
                border-radius:50%;
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
            }
            ${recommender} {
                margin-top: 50px;
                margin-left: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            ${swiperWrapper}::-webkit-scrollbar {
                display: none;
            }
            ${swiperWrapper} {
                display: flex;
                overflow-x: auto;
                scroll-behavior: smooth;
            }
            ${productCard} {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            }
            ${productImage} img {
                object-fit: cover;
                box-sizing: border-box;
            }
            ${productInfo} {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            ${productName} {
                font-size: 16px;
                font-weight: bold;
                margin-right: 5px;
                margin-left: 5px;
            }
            ${productPrice} {
                font-size: 16px;
                color: #777;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            ${swiperButtonNext}, ${swiperButtonPrev} {
                cursor: pointer;
                color: #000;
                top: 50%;
                transform: translateY(-50%);
                z-index: 8888;
                position: absolute;
                font-size: 30px;
                display: none;
            }
            ${swiperButtonNext} {
                right: 10px;
            }
            ${swiperButtonPrev} {
                left: 10px;
            }
        `);
        $('head').append(styleElement);
    }
    function addEventListeners() {
        const { closeButton, closeButtonOptionsNav, closeButtonCouponNav,returnButton,returnCouponButton,text, button, swiperButtonNext, swiperButtonPrev, 
        displayProducts, toggleSwitch, inlineFeatures,couponText,coupon,closeCouponButton,showCouponButton,couponForm,overlay,couponNav,sideBar,
        revealCodeButton,copyCodeButton,closeCouponCodeButton,codeInput,codeError,popupCloseButton} = selectors;   
        $(closeButton).click(closeNav);
        $(closeButtonOptionsNav).click(closeOptionsNav);
        $(closeButtonCouponNav).click(closeCouponNav);
        $(text).click(openOptionsNav);
        $(couponText).click(openCouponNav);
        $(button).click(openNav);
        $(returnButton).click(returnNav);
        $(returnCouponButton).click(returnCouponNav);
        $(swiperButtonNext).click(slideNext);
        $(swiperButtonPrev).click(slidePrev);
        $(displayProducts).on('click', showSlider);
        $(popupCloseButton).on('click', closePopup);
        $(closeCouponCodeButton).click(closeCouponCode);
        $(toggleSwitch).change(function () {
            if ($(toggleSwitch).is(':checked')) {
                $(inlineFeatures).show();
            } else {
                $(inlineFeatures).hide();
            }
            
        });
        $(revealCodeButton).click(revealCode);
        $(showCouponButton).on('click', function() {
            closeCouponCode();
            const selectedInputs = document.querySelectorAll('input[name="inputName"]:checked');
            $(couponForm).empty();
            const inputCode=$(codeInput).val();
            if(!inputCode){
                $(codeError).show();
                $(overlay).show();
               return;
            } 
            else{
                $(codeError).hide();
                selectedInputs.forEach(input => {
                    const inputName = input.value;
                    let inputField = '';
            
                    switch (inputName) {
                        case 'name':
                            inputField = `<div class="${classes.couponInputField}"><label>Name :</label> <input type="text" name="name" placeholder="Your name"><p style="display:none;">Please enter your name </p></div>`;
                            break;
                        case 'lastname':
                            inputField = `<div class="${classes.couponInputField}"><label>Lastname : </label><input type="text" name="lastname"placeholder="Your Lastname"><p style="display:none;">Please enter your lastname </p></div>`;
                            break;
                        case 'email':
                            inputField = `<div class="${classes.couponInputField}"><label>Email : </label> <input type="email" name="email" placeholder="Your email" required><p style="display:none;">Please enter your email </p></div>`;
                            break;
                        case 'phone-number':
                            inputField = `<div class="${classes.couponInputField}"><label>Phone Number : </label><input type="tel" name="phone-number" placeholder="Your phone number"><p style="display:none;">Please enter your phone number </p></div>`;
                            break;
                        default:
                            break;
                    }
            
                    $(couponForm).append(inputField);
                });
                $(coupon).show();
                $(overlay).show();
                $(couponNav).hide();
                $(sideBar).hide();
                $(document).off('mouseup', handleClickOutside);}
            
        });
        
        $(closeCouponButton).on('click', function() {
            $(coupon).hide();
            $(overlay).hide();
          });
        $(copyCodeButton).click(copyCode);

    }  
    function closePopup(){
        const{swiperContainer,overlay}=selectors;
        $(swiperContainer).hide();
        $(overlay).hide();

    }
    function closeCouponCode(){
        const{couponCode,overlay}=selectors;
        $(couponCode).hide();
        $(overlay).hide();
    }

    function copyCode(){          
        $(selectors.copyValue).select();
        document.execCommand("copy");
    }
        
    function revealCode() { 
        const {coupon, copyValue, couponCode, couponForm, codeInput} = selectors;
        let isValid = true;
    
        const inputFields = $(couponForm).find('input[type="text"], input[type="email"], input[type="tel"]');
    
        inputFields.each(function() {
            const $input = $(this);
            const inputValue = $input.val().trim();
            const errorMessage = $input.siblings('p');
    
            if (!inputValue) {
                isValid = false;
                errorMessage.show();
                return; 
            }
    
            if ($input.attr('type') === "email" && !(/^\S+@\S+\.\S+$/.test(inputValue))) {
                isValid = false;
                errorMessage.show();
                return; 
            }
    
            if ($input.attr('type') === "tel" && !(/^\d{10}$/.test(inputValue))) {
                isValid = false;
                errorMessage.show();
                return; 
            }
    
            errorMessage.hide();
        });
    
        if (isValid) {
            $(copyValue).val($(codeInput).val());
            $(coupon).hide();
            $(couponCode).show();
        }
    }
    
    function closeNav() {
        const { sideBar, overlay } = selectors;
        $(sideBar).css('width', '0');
        $(overlay).hide();
        $(document).off('mouseup', handleClickOutside);

    }
    function closeOptionsNav() {
        $(selectors.optionsNav).css('width', '0');             
        closeNav();
    }
    function closeCouponNav() {
        $(selectors.couponNav).css('width', '0');
        closeNav();
    }
    function openCouponNav(){
        $(selectors.couponNav).show();
        $(selectors.couponNav).css('width', '300px');
 
    }
    function openOptionsNav() {
        $(selectors.optionsNav).css('width', '300px');
    }
    function openNav() {
        const { sideBar, overlay } = selectors;
        $(sideBar).show();
        $(sideBar).css('width', '300px');
        $(overlay).show();
        $(document).on('mouseup', handleClickOutside);
    }
    function returnCouponNav() {
        $(selectors.couponNav).css('width', '0');
    }
    function returnNav() {
        $(selectors.optionsNav).css('width', '0');
    }
    function slideNext() {
        const { swiperWrapper, toggleSwitch } = selectors;
        const scrollAmount = $(toggleSwitch).is(':checked') ? 375 : 255;
        $(swiperWrapper)[0].scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    function slidePrev() {
        const { swiperWrapper, toggleSwitch } = selectors;
        const scrollAmount = $(toggleSwitch).is(':checked') ? -375 : -255;
        $(swiperWrapper)[0].scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    function showSlider() {
        const inputTitleContent=$(selectors.titleInput + ' input');
        const institle = inputTitleContent.val().trim();
        if(!institle){
            $(selectors.inputTitleError).show();
            return; 
        }
        const numProducts = parseInt($(selectors.productsNumberInput).val(), 10);

        if (numProducts < 1) {
            $(selectors.inputNumberError).show();
            return;

        } else if (numProducts > 20) {
           
            $(selectors.inputNumberError).show();
            return;        }
        const productsType = $('input[name="productType"]:checked').val();

        const { toggleSwitch, classError, inputError} = selectors;
        if ($(toggleSwitch).is(':checked')) {
            const inputField = $(`${selectors.inlineInput} input`);
            const selector = inputField.val().trim();

            if (!selector) {
                $(inputError).show();
                $(classError).hide();
                return;
            }

            const targetElement = $(selector);

            if (targetElement.length === 0) {
                $(classError).show();
                $(inputError).hide();
                return;
            }
        }
        $(selectors.inputTitleError).hide();
        $(selectors.inputNumberError).hide();
        $(inputError).hide();
        $(classError).hide();
        closeOptionsNav() ;
        fetchAll(numProducts,productsType);
    }

    function handleClickOutside(event) {
        const { sideBar, optionsNav, button,couponNav } = selectors;
        if (!$(sideBar).is(event.target) && $(sideBar).has(event.target).length === 0 &&
            !$(optionsNav).is(event.target) && $(optionsNav).has(event.target).length === 0 &&
            !$(couponNav).is(event.target) && $(couponNav).has(event.target).length === 0 &&
            !$(button).is(event.target)) {
            closeNav();
            closeOptionsNav();
            closeCouponNav();
        }

    }

    let products = [];

    function fetchAll(numProducts,productsType) {
        $.getJSON(`https://recommendationv2.api.useinsider.com/v2/${productsType}?details=true&locale=tr_TR&partnerName=10008040&size=${numProducts}&currency=TRY`)
            .done(function (data) {
                products = data.data || [];
                initializeSwiper(numProducts);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown);
            });
    }

    function initializeSwiper(numProducts) {
        const { swiperContainer,productCard,productImage,productInfo, productName,productPrice, 
        swiperButtonNext,swiperButtonPrev, swiperWrapper, inputOptions,toggleSwitch,productSlide,sliderTitle,popupCloseButton} = selectors
        $(swiperWrapper).empty();
        $(swiperContainer).show();
        const inputField = $(selectors.inlineInput + ' input');
        const selector = inputField.val().trim();
        const styleElement = $("<style>").attr("id", "dynamicStyles");
        const inputTitleContent=$(selectors.titleInput + ' input');
        const institle = inputTitleContent.val().trim();
        $(sliderTitle).text(institle);
        products.slice(0, numProducts).forEach(product => {
            const slide = $('<div>').addClass('ins-swiper-slide-123').html(`
                <div class="${classes.productCard}">
                    <div class="${classes.productImage}">
                        <a href="${product.url}" target="_blank">
                        <img src="${product.image_url}" alt="${product.name}">
                    </a>
                    </div>
                    <div class="${classes.productInfo}">
                        <a href="${product.url}" class="${classes.productName}">${product.name}</div>
                        <div class="${classes.productPrice}">${product.original_price.TRY} TL</div>
                    </div>
                </div>`);

                $(swiperWrapper).append(slide);
        });
        
        if ($(toggleSwitch).is(':checked')) {
            const targetElement = $(selector);
            const placementOption = $(inputOptions).val();

            if (!targetElement.has($(swiperWrapper).parent()).length) {
                targetElement.append($(swiperWrapper).parent());
            }

            switch (placementOption) {
                case 'append':
                    targetElement.append($(swiperWrapper).parent());
                    break;
                case 'prepend':
                    targetElement.prepend($(swiperWrapper).parent());
                    break;
                case 'after':
                    targetElement.after($(swiperWrapper).parent());
                    break;
                case 'before':
                    targetElement.before($(swiperWrapper).parent());
                    break;
                default:
                    console.error(`Unknown placement option: ${placementOption}`);
            }
        }

        const stylesForInlineDisplay =

            `    
            ${popupCloseButton}{
                display:none;
            }
            ${sliderTitle} {
                margin-top:6px;
                font-size:40px;
                font-weight: bold;
                margin-bottom:6px;
            }       
            ${swiperContainer} {
                padding-top: 20px;
                box-sizing: border-box;
                position: relative;
            }
            ${swiperWrapper}{
                padding: 0;
                list-style-type: none;
                display: flex;
                overflow-x: auto;
                scroll-behavior: smooth;
                height:500px;         
            }
            ${productSlide} {
                background-color: #fff;
                border-radius: 10px;
                text-align: center;
                padding: 10px;
                color: #333;
                padding: 0;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                height: auto;
            }
            ${productCard}{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
               
            }
            ${productImage} img {
               
                border-radius: 8px 8px 0px 0px;
                object-fit: cover;
                box-sizing: border-box;
            }
            ${productInfo} {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            ${productName} {
                
                font-weight: bold;
                margin-right: 5px;
                margin-left: 5px;
                text-decoration:none;
                color:#333;
            }
            ${productPrice} {
                color: #777;
                margin-top: 10px;
                margin-bottom: 10px;
            }
                
            ${swiperButtonNext} {
                right: 5px;
                cursor: pointer;
                color: #000;
                top: 50%;        
                z-index: 8888;
                display: none;
                position: absolute;
                font-size:50px;
            }
            ${swiperButtonPrev} {
                left: 5px;
                cursor: pointer;
                color: #000;
                top: 50%;
                z-index: 8888;
                display: none;
                position: absolute;
                font-size:50px;           
            }

            @media (min-width: 1025px) {
                ${productSlide}{
                        height: auto;
                    }
                ${productCard} {
                        height: 490px;
                        width:310px;
                        margin-right:65px;
                    }
                ${productImage} img {
                        width: 310px;
                        height: auto;            
                    }
                    
                ${productName}{
                        font-size: 16px;              
                    }
                ${productPrice} {
                        font-size: 16px;
                    }
            }
            @media (min-width: 601px) and (max-width: 1024px) {
                ${productSlide}{     
                    padding: 10px;
                    height: auto;
                }
                ${productCard}{
                    height: 360px;
                    width: 160px;
                    margin-right: 20px;
                }
                ${productImage} img {
                    width: 160px;
                }
                ${productName} {
                    font-size: 16px;
                }
                ${productPrice}{
                    font-size: 16px;
                }
            }

            @media (max-width: 600px) {
                ${productSlide}{     
                    padding: 10px;
                    height: auto;
                }
                ${productCard} {
                    width: 90px;
                    margin-right: 6px;
                }
                ${productImage}img {
                    width: 90px;
                }
                ${productName} {
                    font-size: 6px;
                }
                ${productPrice} {
                    font-size: 6px;
                }
            }

        `;
        const stylesForPopupDisplay = `
            ${popupCloseButton}{
                display:block;
                margin-left:99%;
                cursor:pointer;
            }
            ${sliderTitle} {
                margin-top:6px;
                font-size:40px;
                font-weight: bold;
                margin-bottom:6px;
            } 

            ${swiperContainer} {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                max-width: 800px;
                background: white;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                z-index: 9999;
                border-radius: 10px;
                padding: 20px 20px 20px 32px;
                box-sizing: border-box;
            }
            ${swiperWrapper} {
                display: flex;
                overflow-x: auto;
                scroll-behavior: smooth;
                padding: 20px 0;
            }
            @media (min-width: 825px) {
               ${productSlide}{
                    margin-right: 35px;
                    height:420px;
                } 
                ${productCard} {
                    height: 420px;
                    width:220px;

                }
                ${productImage} img {
                    width: 220px;
                    height: auto; 
                }
             
               ${productName} {
                font-size: 16px;
                
            }
               ${productPrice}{
                font-size: 16px;
            }

            }
            @media (min-width: 601px) and (max-width: 824px) {
                ${productSlide} {
                    margin-right: 35px;
                    height:420px;
                } 
                ${productCard} {
                    height: 420px;
                    width:220px;

                }
                ${productImage} img {
                    width: 220px;
                    height: auto; 
                }
             
               ${productName} {
                   font-size: 16px;    
               }
               ${productPrice} {
                  font-size: 16px;
               }

            }

           @media (max-width: 600px) {
                ${productSlide}{
                    margin-right: 18px;
                    height:420px;
                } 
                ${productCard} {
                    height: 420px;
                    width:170px;
                }

                ${productImage} img {
                    width: 170px;
                    height: auto; 
                }
            
               ${productName}{
                   font-size: 16px;    
                }

               ${productPrice} {
                   font-size: 16px;
               }

            }


            ${productSlide} {
                flex: 0 0 auto;      
            }
            ${productCard} {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
                }
            ${productImage} img {
                border-radius: 8px 8px 0px 0px;
                object-fit: cover;
                box-sizing: border-box;
            }
            ${productInfo}{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            ${productName} {
                font-weight: bold;
               text-align:center;
               text-decoration:none;
                color:#333;
            }
           ${productPrice}{
                color: #777;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            ${swiperButtonNext}, ${swiperButtonPrev} {
                cursor: pointer;
                color: #000;
                top: 50%;
                transform: translateY(-50%);
                z-index: 8888;
                position: absolute;
                font-size: 30px;
                display:none;
            }
            ${swiperButtonNext} {
                right: 10px;
            }
            ${swiperButtonPrev} {
                left: 10px;
            }
                  `;

        styleElement.text($(toggleSwitch).is(':checked') ? stylesForInlineDisplay : stylesForPopupDisplay);
        $("#dynamicStyles").remove();
        $('head').append(styleElement);    
        $(swiperButtonNext).show();
        $(swiperButtonPrev).show();
        if ($(toggleSwitch).is(':checked')) {
            $(selectors.overlay).hide(); 
        } else {
            $(selectors.overlay).show(); 
        }
    
    }
  
    init();
};
    document.head.appendChild(script);

})();
