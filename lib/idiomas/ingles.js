const lenguaje = () => { return 'en' } //ENGLISH

//MESSAGE NOTICES
const smsAvisoRG = () => { return `╰⊱✅⊱ *Результаты* ⊱✅⊱╮\n\n` }
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *Внимание* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *Информация* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *Ошибка* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *Неправильное действие* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *Отчет* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *Выполнено* ⊱💚⊱╮\n\n` }


//PARAMETERS IN COMMANDS
const smsRowner = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОЖЕТ ИСПОЛЬЗОВАТЬ ТОЛЬКО СОЗДАТЕЛЬ БОТА!!\`\`\`` }//BOT NUMBER
const smsOwner = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОЖЕТ ИСПОЛЬЗОВАТЬ ТОЛЬКО МОЙ СОЗДАТЕЛЬ!!\`\`\`` }//OWNER
const smsMods = () => { return `\`\`\`¡¡ЭТУ КОМАНДУ МОГУТ ИСПОЛЬЗОВАТЬ ТОЛЬКО АДМИНЫ И МОЙ СОЗДАТЕЛЬ!!\`\`\`` }//MODERATORS
const smsPremium = () => { return `\`\`\`¡¡ЭТА КОМАНДА ДОСТУПНА ТОЛЬКО ПРЕМИУМ-ПОЛЬЗОВАТЕЛЯМ И МОЕМУ СОЗДАТЕЛЮ!! ЧТОБЫ ПОЛУЧИТЬ ПРЕМИУМ, КУПИТЕ ПРЕМИУМ, ИСПОЛЬЗУЯ #pass premium\`\`\`` }//PREMIUM USERS
const smsGroup = () => { return `\`\`\`¡¡ЭТА КОМАНДА МОЖЕТ ИСПОЛЬЗОВАТЬСЯ ТОЛЬКО В ГРУППАХ!!\`\`\`` }//FOR GROUPS
const smsPrivate = () => { return `\`\`\`¡¡ЭТА КОМАНДА МОЖЕТ БЫТЬ ИСПОЛЬЗОВАНА ТОЛЬКО ДЛЯ ЛИЧНОГО ЧАТА!!\`\`\`` }//TO THE PRIVATE
const smsAdmin = () => { return `\`\`\`¡¡ЭТА КОМАНДА ПРЕДНАЗНАЧЕНА ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ!!\`\`\`` }//ADMINS
const smsBotAdmin = () => { return `\`\`\`¡¡МНЕ НУЖНО БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ВЫ МОГЛИ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ!!\`\`\`` }//BOT WITH ADMIN
const smsUnreg = () => { return `\`\`\`¡¡ВЫ ДОЛЖНЫ БЫТЬ ЗАРЕГИСТРИРОВАНЫ, ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ, НАПИШИТЕ #verify TO REGISTER!!\`\`\`` }//VERIFY
const smsRestrict = () => { return `\`\`\`¡¡ЭТА КОМАНДА ОГРАНИЧЕНА МОИМ СОЗДАТЕЛЕМ!!\`\`\`` }//RESTRICT COMMAND


//LIST MENU
const smsTime = () => { return `Текущее время`}
const smsUptime = () => { return `Бег Во время`}
const smsVersion = () => { return `Версия ${global.packname}`}
const smsTotalUsers = () => { return `Общее количество пользователей`}
const smsMode = () => { return `Это в режиме`}
const smsModePublic = () => { return `ОБЩЕСТВЕННЫЙ`}
const smsModePrivate = () => { return `ПРИВАТНЫЙ`}
const smsBanChats = () => { return `Запрещенные чаты`}
const smsBanUsers = () => { return `Забаненные пользователи`}
const smsPareja = () => { return `Пара`}
const smsResultPareja = () => { return `Одиночный`}
const smsSaludo = () => { return `👋 ПРИВЕТ!ДОБРО ПОЖАЛОВАТЬ 👋`}
const smsDia = () => { return `🌇 Доброе утро ⛅`}
const smsTarde = () => { return `🏙️ Добрый вечер 🌤️`}
const smsTarde2 = () => { return `🌆 Добрый вечер 🌥️`}
const smsNoche = () => { return `🌃 Доброй ночи 💫`}
const smsListaMenu = () => { return `⊹ СПИСОК МЕНЮ ⊹`}
const smsLista1 = () => { return `🌟 Инфоормация о боте 🌟`}
const smsLista2 = () => { return `💖 Создатель 💖`}
const smsLista3 = () => { return `🎁 Оплата : Техподдержка 🎁`}
const smsLista4 = () => { return `🚀 Скорость 🚀`}
const smsLista5 = () => { return `💡 ИНФОРМАЦИЯ О МЕНЮ 💡`}
const smsLista6 = () => { return `🌀 ПОЛНОЕ МЕНЮ 🌀`}
const smsLista7 = () => { return `🐈 УСТАНОВИТЬ БОТА 🐈`}
const smsLista8 = () => { return `🍄 БЫТЬ СУББОТОМ 🍄`}
const smsLista9 = () => { return `📄 ПРАВИЛА, УСЛОВИЯ И КОНФИДЕНЦИАЛЬНОСТЬ 📄`}
const smsLista10 = () => { return `🌟 ПРИКЛЮЧЕНИЕ И ВЕРШИНА 🌟`}
const smsLista11 = () => { return `🏆 ВЕРШИНА МИРА 🏆`}
const smsLista12 = () => { return `🏅 ПРЕМИУМ-ПОЛЬЗОВАТЕЛИ 🏅`}
const smsLista13 = () => { return `🎟️ БУДЬТЕ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕМ 🎟️`}
const smsLista14 = () => { return `🛣️ МИССИИ 🛣️`}
const smsLista15 = () => { return `⚗️ МЕНЮ RPG ⚗️`}
const smsLista16 = () => { return `🏪 ПОКУПКА В МАГАЗИНЕ 🏪`}
const smsLista17 = () => { return `🎒 Инвентарь 🎒`}
const smsLista18 = () => { return `🌟 Мультимедиа 🌟`}
const smsLista19 = () => { return `📲 МЕНЮ ЗАГРУЗКИ 📲`}
const smsLista20 = () => { return `🔍 МЕНЮ ПОИСКА 🔍`}
const smsLista21 = () => { return `🛰️ МЕНЮ КОНВЕРТЕРА 🛰️`}
const smsLista22 = () => { return `🧰 МЕНЮ МОДИФИКАТОРА ЗВУКА 🧰`}
const smsLista22_1 = () => { return `🔩 МЕНЮ "ИНСТРУМЕНТЫ" 🔩`}
const smsLista23 = () => { return `🌟 Веселье 🌟`}
const smsLista24 = () => { return `🎡 ДИНАМИЧНЫЕ ИГРЫ 🎡`}
const smsLista25 = () => { return `🔊 ЗВУКОВОЕ МЕНЮ 🔊`}
const smsLista26 = () => { return `🎈 МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ 🎈`}
const smsLista27 = () => { return `✨ МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ ✨`}
const smsLista28 = () => { return `🌅 МЕНЮ ЛОГОТИПОВ 2 🌅`}
const smsLista29 = () => { return `⛩️ СЛУЧАЙНЫЕ МЕМЫ И АНИМЕ ⛩️`}
const smsLista30 = () => { return `🔞 КОМАНДЫ ДЛЯ ВЗРОСЛЫХ +18 🔞`}
const smsLista31 = () => { return `🌟 Настройки 🌟`}
const smsLista32 = () => { return `🔰 МЕНЮ ДЛЯ ГРУПП 🔰`}
const smsLista33 = () => { return `📑 ТИПЫ СПИСКОВ 📑`}
const smsLista34 = () => { return `⚙️ ЦЕНТР НАСТРОЙКИ ⚙️`}
const smsLista35 = () => { return `💎 МЕНЮ ВЛАДЕЛЬЦА 💎`}

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ Добро пожаловать!!*\n┊💖 @user\n┊📄 *ПРОЧИТАЙТЕ ОПИСАНИЕ ГРУППЫ*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @user\n┊ *ОН ПОКИНУЛ ГРУППУ, СКОРО ВЕРНЕТСЯ* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user ТЕПЕРЬ ВЫ ЯВЛЯЕТЕСЬ АДМИНИСТРАТОРОМ В ЭТОЙ ГРУППЕ!!*'}
const smsSdemote = () => { return '*@user БОЛЬШЕ НЕ АДМИНИСТРАТОР В ЭТОЙ ГРУППЕ!!*'}
const smsSdesc = () => { return '*НОВОЕ ОПИСАНИЕ ГРУППЫ:*\n\n@desc'}
const smsSsubject = () => { return '*НОВОЕ НАЗВАНИЕ ГРУППЫ:*\n\n@subject'}
const smsSicon = () => { return '*ФОТОГРАФИЯ ЭТОЙ ГРУППЫ БЫЛА ИЗМЕНЕНА!!*'}
const smsSrevoke = () => { return '*ТЕПЕРЬ ЭТО НОВАЯ ССЫЛКА В ЭТОЙ ГРУППЕ!!*\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 Соединение ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ SUCCESSFUL CONNECTION WITH WHATSAPP  😺\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsClearTmp = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ АВТОМАТИЧЕСКАЯ ОЧИСТКА TMP ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ FILES IN THE TMP FOLDER WERE SUCCESSFULLY DELETED 😼✨\n│\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`}
const smsCargando = () => { return `😸 Загрузка...\n`}
const smsCodigoQR = () => { return `\n✅ СРОК ДЕЙСТВИЯ QR-КОДА ИСТЕКАЕТ ЧЕРЕЗ 45 СЕКУНД ✅`}
const smsConexionOFF = () => { return `\n⚠️ НЕТ ПОДКЛЮЧЕНИЯ, УДАЛИТЕ ПАПКУ ${global.authFile} И ОТСКАНИРУЙТЕ QR-КОД ⚠️`}

//_allantilink.js
const smsTextoYT = () => { return '😻 Super JoKeR - WhatsApp '}
const smsApagar = () => { return '❌ ДЕАКТИВИРОВАТЬ'}
const smsEncender = () => { return '✅ Активировать'}
const smsEnlaceTik = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА TIKTOK*\n\n*Я ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ*`}
const smsEnlaceYt = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА YOUTUBE*\n\n*Я ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ*`}
const smsEnlaceTel = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА TELEGRAM*\n\n*Я ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ*`}
const smsEnlaceFb = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА FACEBOOK*\n\n*Я ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ*`}
const smsEnlaceIg = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА INSTAGRAM*\n\n*Я ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ*`}
const smsEnlaceTw = () => { return `*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА TWITTER*\n\n*Я ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ*`}
const smsAllAdmin = () => { return `*МНЕ НУЖНО БЫТЬ АДМИНИСТРАТОРОМ, ЧТОБЫ ИМЕТЬ ВОЗМОЖНОСТЬ УДАЛЯТЬ ЗЛОУМЫШЛЕННИКОВ*`}
const smsSoloOwner = () => { return `*МОЙ СОЗДАТЕЛЬ ДОЛЖЕН АКТИВИРОВАТЬ ФУНКЦИЮ*\n*#on restrict*`}

//handler.js
const smsCont1 = () => { return `*🔴 СБОЙ КОМАНДЫ 🔴*`}
const smsCont2 = () => { return `*⚠️ ПЛАГИН:*`}
const smsCont3 = () => { return `*⚠️ ПОЛЬЗОВАТЕЛЬ:*`}
const smsCont4 = () => { return `*⚠️ КОМАНДА:*`}
const smsCont5 = () => { return `*⚠️ ОШИБКА:*`}
const smsCont6 = () => { return `*❗ СООБЩИТЕ ОБ ЭТОМ СООБЩЕНИИ, ИСПОЛЬЗУЯ КОМАНДУ #reporte, ЧТОБЫ УСТРАНИТЬ ЕГО*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*У НЕГО НЕТ БРИЛЛИАНТОВ!! 💎 ВЫ МОЖЕТЕ ЗАЙТИ В МАГАЗИН С ПОМОЩЬЮ КОМАНДЫ*`}
const smsCont8 = () => { return ` *БРИЛЛИАНТЫ 💎 ИСПОЛЬЗОВАНЫ*`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}*НУЖЕН УРОВЕНЬ ➡️*`}
const smsCont10 = () => { return `*ЧТОБЫ ИСПОЛЬЗОВАТЬ ЭТУ КОМАНДУ. ВАШ ТЕКУЩИЙ УРОВЕНЬ СОСТАВЛЯЕТ ➡️*`}
const smsCont11 = () => { return `*ОБНОВИТЬ С ПОМОЩЬЮ КОМАНДЫ*`}
const smsCont12 = () => { return `ОТЛИЧНАЯ ГРУППА!! 😼`}
const smsCont13 = () => { return `КТО-ТО ПРИСОЕДИНИЛСЯ!! 🥳`}
const smsCont14 = () => { return `КТО-ТО УШЕЛ!! 🧐`}
const smsCont15 = () => { return `*ПРИВЕТ*`}
const smsCont16 = () => { return `*ВИДЕОЗВОНКИ* 📲`}
const smsCont17 = () => { return `*ЗВОНКИ* 📞`}
const smsCont18 = () => { return `*ОНИ НЕ АВТОРИЗОВАНЫ, ПОЭТОМУ Я СОБИРАЮСЬ ЗАБЛОКИРОВАТЬ ВАС*\n\n*ЕСЛИ ВЫ ПОЗВОНИЛИ СЛУЧАЙНО, СВЯЖИТЕСЬ С ЧЕЛОВЕКОМ, СОЗДАВШИМ ЭТОГО БОТА*`}
const smsCont19 = () => { return `ЗАЩИТА ОТ УДАЛЕНИЯ`}
const smsCont20 = () => { return `*┃✤ Имя:*`}
const smsCont21 = () => { return `*┃✤ Отправка удаленного сообщения...*`}

//_anti-internacional.js
const smsInt1 = () => { return `*ЭТОТ НОМЕР*`}
const smsInt2 = () => { return `*НЕ ДОПУСКАЕТСЯ В ЭТУ ГРУППУ!!*`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}*ПОСКОЛЬКУ ВЫ ЯВЛЯЕТЕСЬ АДМИНИСТРАТОРОМ В ЭТОЙ ГРУППЕ, ВЫ НЕ БУДЕТЕ УДАЛЕНЫ*`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}*В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА НА WHATSAPP*\n\n*Я ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ*`}


//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}В ЭТОЙ ГРУППЕ БЫЛА ОБНАРУЖЕНА ЗАПРЕЩЕННАЯ ССЫЛКА, СОДЕРЖАЩАЯ HTTPS\n\nЯ ВЫНУЖДЕН УДАЛИТЬ ТЕБЯ`}

//_antispam.js
const smsNoSpam = () => { return `🤨 НЕ ОТПРАВЛЯЙТЕ СПАМ, ВЫ НЕ СМОЖЕТЕ ИСПОЛЬЗОВАТЬ ${global.packname} для ${60000 / 1000 - 59} минут`}

//_antispam_.js
const smsNoSpam2 = () => { return `БЫЛ РАЗБАНЕН ПОСЛЕ ${60000 / 1000 - 59} МИНУТ. ПОЖАЛУЙСТА, НЕ ОТПРАВЛЯЙТЕ СПАМ!!`}

//Texto
const smsConMenu = () => { return `☘️ МЕНЮ`}

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ПРОИЗОШЛА НЕПРЕДВИДЕННАЯ ОШИБКА.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ВОЗНИКЛО НЕУДОБСТВО. ПОПРОБУЙТЕ СНОВА.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ЧТО-ТО ПОШЛО НЕ ТАК, СООБЩИТЕ ОБ ЭТОЙ КОМАНДЕ, ИСПОЛЬЗУЯ:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `НЕТ!!! 🤬 МАТ В ГРУППЕ ЗАПРЕЩЕН`}
const smsToxic2 = () => { return `ЭТО ЗАПРЕЩЕНО, НЕ БУДЬТЕ ТОКСИЧНЫМИ`}
const smsToxic3 = () => { return `*ПРЕДУПРЕЖДЕНИЕ*\n⚠️`}
const smsToxic4 = () => { return `😭 МНЕ ЖАЛЬ`}
const smsToxic5 = () => { return `☢️ ОТКЛЮЧИТЬ АНТИМАТ`}
const smsToxic6 = () => { return `Я ПРЕДУПРЕЖДАЛ ТЕБЯ НЕСКОЛЬКО РАЗ!!`}
const smsToxic7 = () => { return `ВЫ ПРОПУСТИЛИ ВСЕ 4 ПРЕДУПРЕЖДЕНИЯ, ТЕПЕРЬ ВЫ БУДЕТЕ УСТРАНЕНЫ 🙄`}

//Tienda
const eExp = () => { return '⚡ Experience' } 
const eDiamante = () => { return '💎 Diamond' } 
const eDiamantePlus = () => { return '💎+ Diamond+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Emerald' } 
const eJoya = () => { return '♦️ Jewel' }
const eMagia = () => { return '🌀 Magic' } 
const eOro = () => { return '👑 Gold' } 
const eGataCoins = () => { return '🐱 GataCoins' }
const eGataTickers = () => { return '🎫 Gata Tickers' } 
const eEnergia = () => { return '✨ Energy' }

const ePocion = () => { return '🥤 Potion' }
const eAgua = () => { return '💧 Water' }
const eBasura = () => { return '🗑 Trash' }
const eMadera = () => { return '🪵 Wood' }
const eRoca = () => { return '🪨 Rock' }
const ePiedra = () => { return '🥌 Stone' }
const eCuerda = () => { return '🕸️ String' }
const eHierro = () => { return '⛓️ Iron' }
const eCarbon = () => { return '⚱️ Coal' }
const eBotella = () => { return '🍶 Bottle' }
const eLata = () => { return '🥫 Can' }
const eCarton = () => { return '🪧 Paperboard' } 

const eEletric = () => { return '💡 Electricity' }
const eBarraOro = () => { return '〽️ Gold bar' }
const eOroComun = () => { return '🧭 Common Gold' }
const eZorroG = () => { return '🦊🌫️ Big Fox' }
const eBasuraG = () => { return '🗑🌫️ Super Trash' }
const eLoboG = () => { return '🐺🌫️ Super Wolf' }
const eMaderaG = () => { return '🛷🌫️ Super Wood' }
const eEspada = () => { return '⚔️ Sword' }
const eCarnada = () => { return '🪱 Bait' }
const eBillete = () => { return '💵 Banknotes' }
const ePinata = () => { return '🪅 Pinata' }
const eGancho = () => { return '🪝 Hook' }
const eCanaPescar = () => { return '🎣 Fishing Rod' } 

const eCComun = () => { return '📦 Common Box' }
const ePComun = () => { return '🥡 Uncommon Box' }
const eCMistica = () => { return '🗳️ Mythic Box' }
const eCMascota = () => { return '📫 Pet Box' }
const eCJardineria = () => { return '💐 Gardening Box' }
const eClegendaria = () => { return '🎁 Legendary Box' } 

const eUva = () => { return '🍇 Grape' }
const eManzana = () => { return '🍎 Apple' }
const eNaranja = () => { return '🍊 Orange' }
const eMango = () => { return '🥭 Mango' }
const ePlatano = () => { return '🍌 Banana' } 

const eSUva = () => { return '🌾🍇 Grape seeds' }
const eSManzana = () => { return '🌾🍎 Apple seeds' }
const eSNaranja = () => { return '🌾🍊 Orange seeds' }
const eSMango = () => { return '🌾🥭 Mango Seeds' }
const eSPlatano = () => { return '🌾🍌 Banana seeds' } 

const eCentauro = () => { return '🐐 Centaur' }
const eAve = () => { return '🦅 Bird' }
const eGato = () => { return '🐈 Cat' }
const eDragon = () => { return '🐉 Dragon' }
const eZorro = () => { return '🦊 Fox' }
const eCaballo = () => { return '🐎 Horse' }
const eFenix = () => { return '🕊️ Phoenix' }
const eLobo = () => { return '🐺 Wolf' }
const ePerro = () => { return '🐶 Dog' } 

const eAMascots = () => { return '🍖 Pet Food' }
const eCCentauro = () => { return '🐐🥩 Centaur Food' }
const eCAve = () => { return '🦅🥩 Bird Food' }
const eCMagica = () => { return '🌀🥩 Magic Food' }
const eCDragon = () => { return '🐉🥩 Dragon Food' }
const eACaballo = () => { return '🐎🥩 Horse Food' }
const eCFenix = () => { return '🕊️🥩 Phoenix Food' } 


//config-on y off.js
const smsWel1 = () => { return `🎉 ПРИВЕТСТВИЕ`}
const smsWel2 = () => { return `Приветствие новеньких участников в группах`}
const smsDete1 = () => { return `🔔 ОБНАРУЖЕНИЕ`}
const smsDete2 = () => { return `Уведомления о действиях внутри Группы`}
const smsANivel1 = () => { return `🆙 АВТОУРОВЕНЬ`}
const smsANivel2 = () => { return `Повышайте уровень каждого автоматически; (Применяется вознаграждение за повышение уровня)`}
const smsRestri1 = () => { return `⛔ БОТАДМИН`}
const smsRestri2 = () => { return `Включить функцию добавления или удаления людей в группах`}
const smsLlamar1 = () => { return `🚫 АНТИЗВОНКИ`}
const smsLlamar2 = () => { return `Блокируйте людей, которые совершают звонки`}
const smsAntiSp1 = () => { return `🚯 АНТИСПАМ`}
const smsAntiSp2 = () => { return `Запретить использование команд, когда кто-то отправляет какой-либо тип спама`}
const smsModP1 = () => { return `🌐 ГРУППА`}
const smsModP2 = () => { return `Включите функцию, чтобы каждый мог использовать дЖОКЕРА`}
const smsModAd1 = () => { return `🛂 ТОЛЬКОАДМИНЫ`}
const smsModAd2 = () => { return `Только администраторы смогут использовать ДЖОКЕРА в группах`}
const smsLect1 = () => { return `✅ АВТОЧТЕНИЕ`}
const smsLect2 = () => { return `Оставляйте сообщения или чаты как прочитанные`}
const smsTempo1 = () => { return `🐈 ВРЕМЕННЫЙБОТ`}
const smsTempo2 = () => { return `Функция, позволяющая временно оставаться в группах`}
const smsStik1 = () => { return `🎠 СТИКЕРЫ`}
const smsStik2 = () => { return `Включите автоматическую отправку стикеров всем`}
const smsStickA1 = () => { return `🪄 АВТОСТИКЕР`}
const smsStickA2 = () => { return `Видео, Gif-файлы, изображения, ссылки в формате jpg или jpeg-формате; Они будут автоматически преобразованы в стикеры`}
const smsReacc1 = () => { return `🤡 РЕАКЦИИ `}
const smsReacc2 = () => { return `Включить автоматическую отправку реакций на сообщения`}
const smsAudi1 = () => { return `🔊 ГОЛОСОВЫЕ`}
const smsAudi2 = () => { return `Включить автоматическую отправку аудиозаписей всем`}
const smsModHor1 = () => { return `🔞 18+`}
const smsModHor2 = () => { return `Показывать контент для взрослых в чатах`}
const smsAntitoc1 = () => { return `☢️ АНТИМАТ`}
const smsAntitoc2 = () => { return `Отправляйте предупреждения тем людям, которые оскорбляют`}
const smsModOb1 = () => { return `👀 OBSERVE MODE`}
const smsModOb2 = () => { return `Сделайте изображения, Gif-файлы и видео доступными для просмотра всеми`}
const smsAntiEli1 = () => { return `🗑️ АНТИУДАЛЕНИЕ`}
const smsAntiEli2 = () => { return `Все удаленные сообщения будут перенаправлены в чат или группу`}
const smsAntiInt1 = () => { return `🌏 АНТИАРАБ`}
const smsAntiInt2 = () => { return `Исключить международные номера, считающиеся поддельными`}
const smsAntiE1 = () => { return `🔗 АНТИССЫЛКА`}
const smsAntiE2 = () => { return `Удаляйте людей, которые отправляют ссылки из групп WhatsApp`}
const smsAntiEE1 = () => { return `🔗 АНТИССЫЛКА2`}
const smsAntiEE2 = () => { return `Удаляйте людей, которые отправляют ссылки, содержащие https`}
const smsAntiTT1 = () => { return `🔗 АНТИТИКТОК`}
const smsAntiTT2 = () => { return `Удаляйте людей, отправляющих ссылки из TikTok`}
const smsAntiYT1 = () => { return `🔗 АНТИЮТУБ`}
const smsAntiYT2 = () => { return `Удаляйте людей, отправляющих ссылки с YouTube`}
const smsAntiTEL1 = () => { return `🔗 АНТИТЕЛЕГРАММ`}
const smsAntiTEL2 = () => { return `Удаляйте людей, которые отправляют ссылки из Telegram`}
const smsAntiFB1 = () => { return `🔗 АНТИФЕЙСБУК`}
const smsAntiFB2 = () => { return `Удаляйте людей, отправляющих ссылки на Facebook`}
const smsAntiIG1 = () => { return `🔗 АНТИИНСТА`}
const smsAntiIG2 = () => { return `Удаляйте людей, отправляющих ссылки на Instagram`}
const smsAntiTW1 = () => { return `🔗 АНТИТВИТТЕР `}
const smsAntiTW2 = () => { return `Удаляйте людей, отправляющих ссылки на Twitter`}
const smsSOLOP1 = () => { return `⚜️ ТОЛЬКОЛИЧКА`}
const smsSOLOP2 = () => { return `Разрешите использовать его только в приватных чатах`}
const smsSOLOG1 = () => { return `⚜️ ТОЛЬКОГРУППЫ`}
const smsSOLOG2 = () => { return `Разрешите использовать его только в групповых чатах`}
const smsConfi1 = () => { return `НАСТРОЙКИ`}
const smsConfi2 = () => { return `*¡ПРИВЕТ!*`}
const smsConfi3 = () => { return `┃ *Выберите опцию из списка*`}
const smsConfi4 = () => { return `┃ *Для начала настройки*`}
const smsConfi5 = () => { return `┃● *Уведомления о конфигурации:*`}
const smsConfi6 = () => { return `┃ ✅ ⇢ *Функция активирована*`}
const smsConfi7 = () => { return `┃ ❌ ⇢ *Функция отключена*`}
const smsConfi8 = () => { return `┃ ⚠️ ⇢ *Этот чат не является группой*`}
const smsConfi9 = () => { return `┃ *Рекомендация: Для просмотра конфигурации*\n┃ *Завершить использование этого группового меню*\n┃`}
const smsConfi10 = () => { return `*~ ЦЕНТР НАСТРОЙКИ*`}
const smsParaAdmins = () => { return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЯ : ГРУППЫ`}
const smsParaAdYOw = () => { return `ДЛЯ АДМИНИСТРАТОРОВ И СОЗДАТЕЛЯ : ЧАТА`}
const smsParaOw = () => { return `ДЛЯ СОЗДАТЕЛЯ : ЧАТА`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `КОМАНДА`} 
const smsMens2 = () => { return `В НАСТОЯЩИЙ МОМЕНТ`} 
const smsMens3 = () => { return `В ЭТОМ`} 
const smsMens4 = () => { return `БОТ`} 
const smsMens5 = () => { return `ЧАТ`} 

//Error2
const smsMensError1 = () => { return `❕ КОМАНДА ОТЧЕТА ❕`} 
const smsMensError2 = () => { return `Следующая команда не выполняется`} 

//_antiviewonce.js
const smsAntiView = () => { return `*НИЧТО НЕ МОЖЕТ БЫТЬ СКРЫТО* 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ НОВЫЙ УРОВЕНЬ 🎖️`} 
const smsAutoLv2 = () => { return `ПРЕДЫДУЩИЙ УРОВЕНЬ:`} 
const smsAutoLv3 = () => { return `ТЕКУЩИЙ УРОВЕНЬ:`} 
const smsAutoLv4 = () => { return `ДИАПАЗОН:`} 
const smsAutoLv5 = () => { return `ДАТА:`} 
const smsAutoLv6 = () => { return `Вы вышли на новый уровень!!!`} 
const smsAutoLv7 = () => { return `🥳 НАГРАДА ЗА ВАШ НОВЫЙ УРОВЕНЬ`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()}*ВИДЕО НЕ ДОЛЖНО ДЛИТЬСЯ БОЛЕЕ 7 СЕКУНД.*`} 

//_expired.js
const smsBottem1 = () => { return `*ПОКИДАЕТ ГРУППУ!!! 🤝 ЕСЛИ ВЫ ХОТИТЕ, ЧТОБЫ ОН ВЕРНУЛСЯ, ИСПОЛЬЗУЙТЕ КОМАНДУ _#bottemporal_, ЧТОБЫ ВЕРНУТЬСЯ В ГРУППУ!!*`} 
const smsBottem2 = () => { return `*💕 ПОМОЩЬ ПОЛЬЗОВАТЕЛЮ*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `СКОРО УВИДИМСЯ 💖`} 

//_premium.js
const smsPremI = () => { return `*¡ВАШЕ ПРЕМИАЛЬНОЕ ВРЕМЯ ЗАКОНЧИЛОСЬ!* 🎟️\n*ЧТОБЫ ПОЛУЧИТЬ НОВЫЙ ПРЕМИУМ-ПРОПУСК, ИСПОЛЬЗУЙТЕ КОМАНДУ:*\n*#pass prem*`} 

//afk-_afk.js
const smsAfkM1 = () => { return `${lenguajeGB['smsAvisoEG']()}*ТЫ ПЕРЕСТАЛ БЕЗДЕЛЬНИЧАТЬ АФК*`} 
const smsAfkM2 = () => { return `*ПРИЧИНОЙ БЕЗДЕЙСТВИЯ БЫЛО:*`} 
const smsAfkM3 = () => { return `*ВРЕМЯ БЕЗДЕЙСТВИЯ:*`} 
const smsAfkM4 = () => { return `${lenguajeGB['smsAvisoAG']()}*НЕ ОТМЕЧАЙТЕ ЭТОГО ПОЛЬЗОВАТЕЛЯ!! НЕАКТИВЕН*`} 
const smsAfkM5 = () => { return `*ПРИЧИНА БЕЗДЕЙСТВИЯ AFK:*`} 
const smsAfkM6 = () => { return `*ПРИЧИНА НЕАКТИВНОСТИ AFK: НЕ УКАЗАНА ПРИЧИНА НЕАКТИВНОСТИ*`} 

//afk-afk.js
const smsAfkM1A = () => { return `${lenguajeGB['smsAvisoAG']()}*НЕ ПОМЕЧАЙТЕ*`} 
const smsAfkM1B = () => { return `*БУДЕТ НЕАКТИВЕН AFK*\n\n*ПРИЧИНА БЕЗДЕЙСТВИЯ AFK*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}*ВЫ НЕ НАХОДИТЕСЬ В АНОНИМНОМ ЧАТЕ*`} 
const smsChatAn2 = () => { return `*IF YOU WANT TO START AN ANONYMOUS CHAT USE THE COMMAND #start OR USE THE BUTTON BELOW*\n`} 
const smsChatAn3 = () => { return `⚡ START ANONYMOUS CHAT`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 *YOU LEFT THE ANONYMOUS CHAT*`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}*THE OTHER USER LEFT THE ANONYMOUS CHAT*`}  
const smsChatAn6 = () => { return `*IF YOU WANT TO GO TO ANOTHER ANONYMOUS CHAT USE THE COMMAND #start OR USE THE BUTTON BELOW*\n`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}*YOU ARE STILL IN AN ANONYMOUS CHAT OR WAITING FOR SOMEONE TO JOIN TO CHAT*`} 
const smsChatAn8 = () => { return `*IF YOU WANT TO EXIT THE ANONYMOUS CHAT USE THE COMMAND #leave OR YOU CAN USE THE BUTTON BELOW*\n`} 
const smsChatAn9 = () => { return `🍁 EXIT ANONYMOUS CHAT`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ *THEY CAN CHAT NOW*`} 
const smsChatAn11 = () => { return `*SOMEONE JOINED THE ANONYMOUS CHAT!!*`} 
const smsChatAn12 = () => { return `❇️ ANOTHER USER`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 *WAITING FOR SOMEONE TO JOIN THE ANONYMOUS CHAT, PLEASE BE PATIENT*`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ СТАРТОВОЕ МЕНЮ ⚡`} 
const smsBotonM2 = () => { return `💫 ПОЛНОЕ МЕНЮ 💫`} 
const smsBotonM3 = () => { return `🎒 ИНВЕНТАРЬ 🎒`} 
const smsBotonM4 = () => { return `ПОЛЬЗОВАТЕЛИ`}
const smsBotonM5 = () => { return `РАНГ`}
const smsBotonM6 = () => { return `УРОВЕНЬ`}
const smsBotonM7 = () => { return `ПРЕМИУМ`}
const smsTex1 = () => { return '*МЕНЮ ПОИСКА*'}
const smsTex2 = () => { return '*МОДИФИКАТОР ЗВУКА*'}
const smsTex3 = () => { return '*МЕНЮ +18*'}
const smsTex4 = () => { return '*ДИНАМИЧЕСКИЙ КОНТЕНТ*'}
const smsTex5 = () => { return '*ПОИСК И ЗАГРУЗКА*'}
const smsTex6 = () => { return '*МЕНЮ +18 ПРЕМИУМ*'}
const smsTex7 = () => { return '⠇ *Изображения +18 качество и разнообразие*\n⠇ *Видео +18 только для вас*\n⠇ *СТИКЕРЫ 18+ ДОСТУПНЫ*'}
const smsTex8 = () => { return '*МЕНЮ КОНВЕРТЕРА*'}
const smsTex9 = () => { return '*МЕНЮ ЗАГРУЗОК*'}
const smsTex10 = () => { return '*МЕНЮ ДИНАМИЧЕСКИХ ИГР*'}
const smsTex11 = () => { return '*МЕНЮ ДЛЯ ГРУПП*'}
const smsTex12 = () => { return '*МЕНЮ "ИНСТРУМЕНТЫ"*'}
const smsTex13 = () => { return '*ИНФОРМАЦИОННОЕ МЕНЮ*'}
const smsTex14 = () => { return '*МЕНЮ ЭФФЕКТОВ И ЛОГОТИПОВ*'}
const smsTex15 = () => { return '*МЕНЮ ЛОГОТИПОВ 2*'}
const smsTex16 = () => { return 'ЗВУКОВОЕ МЕНЮ'}
const smsTex17 = () => { return '*НЕТ НЕОБХОДИМОСТИ ИСПОЛЬЗОВАТЬ ПРЕФИКС В АУДИОЗАПИСЯХ*'}
const smsTex18 = () => { return 'СПИСОК ЗВУКОВ'}
const smsTex19 = () => { return '*ВЫ МОЖЕТЕ ВЫБРАТЬ АУДИО!!*'}
const smsTex20 = () => { return '*МЕНЮ ВЛАДЕЛЬЦА*'}
const smsTex21 = () => { return '*МЕНЮ RPG*'}
const smsTex22 = () => { return '*МЕНЮ СТИКЕРОВ И ФИЛЬТРОВ*'}
const smsTex23 = () => { return '*МЕНЮ СЛУЧАЙНЫХ МЕМОВ И АНИМЕ*'}

//ad
const smsMalused = () => { return '⚡ *ИСПОЛЬЗУЙТЕ КОМАНДУ СЛЕДУЮЩИМ ОБРАЗОМ:*\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ, ПОДОБНУЮ ЭТОМУ ПРИМЕРУ:*\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()}🐈 *ВЫ ДОЛЖНЫ ИСПОЛЬЗОВАТЬ КОМАНДУ ИЛИ ОТВЕТИТЬ НА ЧЬЕ-ЛИБО СООБЩЕНИЕ, КАК В ЭТОМ ПРИМЕРЕ:*\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ОТКРОЕТСЯ ГРУППА ЧЕРЕЗ ОДИН ЧАС_*'}
const smsGrupoTime2 = () => { return '🔒 *_ЗАКРОЕТСЯ ГРУППА ЧЕРЕЗ ОДИН ЧАС_*'}
const smsGrupoTime3 = () => { return '*ГРУППА'}
const smsGrupoTime4 = () => { return 'ЗАКРЫТА'}
const smsGrupoTime5 = () => { return 'ОТКРЫТА'}
const smsGrupoTime6 = () => { return '*В ТЕЧЕНИЕ'}
const smsGrupoTime7 = () => { return '🔒 *ГРУППА ЗАКРЫТА, ОТПРАВЛЯТЬ СООБЩЕНИЯ МОГУТ ТОЛЬКО АДМИНИСТРАТОРЫ*'}
const smsGrupoTime8 = () => { return '🔓 *ГРУППА ОТКРЫТА, КАЖДЫЙ МОЖЕТ ОТПРАВЛЯТЬ СООБЩЕНИЯ*'}
const smsGrupoTime9 = () => { return '🔓 ОТКРЫТАЯ ГРУППА ВО ВРЕМЯ '}
const smsGrupoTime10 = () => { return '🔒 ЗАКРЫТА ГРУППА ВО ВРЕМЯ '}
const smsGrupoTime11 = () => { return ' ЧАС'}
const smsGrupoTime12 = () => { return 'ПОЗВОЛЬТЕ ГРУППЕ ПОБЫВАТЬ НА '}
const smsGrupoTime13 = () => { return 'ПОЗВОЛЬТЕ ГРУППЕ ПРИБЛИЗИТЬСЯ К '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}*НЕ УДАЕТСЯ ДОБАВИТЬ НОМЕР, ПОЖАЛУЙСТА, УБЕДИТЕСЬ, ЧТО ОН ПРАВИЛЬНЫЙ, ВОЗМОЖНО, ОН ПОЯВИЛСЯ НЕДАВНО ИЛИ ВАША КОНФИДЕНЦИАЛЬНОСТЬ УСТАНОВЛЕНА.*`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}*НЕ УДАЕТСЯ ДОБАВИТЬ НОМЕР, ПРОВЕРИТЬ ЕГО ПРАВИЛЬНОСТЬ ИЛИ ДОБАВИТЬ ЕГО ВРУЧНУЮ.*`}

//grupo-admins.js
const smsAddB3 = () => { return `*УВЕДОМЛЕНИЕ ДЛЯ АДМИНИСТРАТОРОВ*`}
const smsAddB4 = () => { return `*ПРИСУТСТВИЕ АДМИНИСТРАТОРА*`}
const smsAddB5 = () => { return `*СООБЩЕНИЕ:*`}
const smsAddB6 = () => { return `Я прошу администраторов, пожалуйста.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}*МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО В ТОМ СЛУЧАЕ, ЕСЛИ ФУНКЦИЯ АКТИВИРОВАНА:*\n`}
const smsAdveu2 = () => { return 'Reason'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}*НЕ ЗАБУДЬТЕ УКАЗАТЬ ПРИЧИНУ ПРЕДУПРЕЖДЕНИЯ*\n`}
const smsAdveu4 = () => { return '*ПОЛУЧИЛ ПРЕДУПРЕЖДЕНИЕ В ЭТОЙ ГРУППЕ!!*'}
const smsAdveu5 = () => { return 'ПРЕДУПРЕЖДЕНИЕ'}
const smsAdveu6 = () => { return '🎒 ИНВЕНТАРЬ'}
const smsAdveu7 = () => { return '*Я ПРЕДУПРЕЖДАЛ ТЕБЯ НЕСКОЛЬКО РАЗ!!*'}
const smsAdveu8 = () => { return '*ТЕПЕРЬ ВЫ БУДЕТЕ УДАЛЕНЫ* 🙄'}
const smsAdveu9 = () => { return '😇 СПАСИБО'}
const smsAdveu10 = () => { return '*В ЭТОЙ ГРУППЕ БЫЛО УДАЛЕНО ПРЕДУПРЕЖДЕНИЕ!!*'}
const smsAdveu11 = () => { return 'БЫЛО:'}
const smsAdveu12 = () => { return 'СТАЛО:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return `*НОМЕР НЕДЕЙСТВИТЕЛЕН, ПОПРОБУЙТЕ ЕЩЕ РАЗ ОТВЕТИТЬ НА ЧЬЕ-ЛИБО СООБЩЕНИЕ ИЛИ ИСПОЛЬЗУЙТЕ, КАК В ЭТОМ ПРИМЕРЕ:*\n`}
const smsDemott2 = () => { return '*ТЕПЕРЬ У НЕГО ЕСТЬ ВЛАСТЬ В ГРУППЕ!!*'}
const smsDemott3 = () => { return '*БОЛЬШЕ НЕ ИМЕЕТ ВЛАСТИ В ГРУППЕ!!*'}

//grupo-info.js
const smsGI1 = () => { return '*ИНФОРМАЦИЯ О ГРУППЕ*'}
const smsGI2 = () => { return '*ИДЕНТИФИКАТОР ГРУППЫ*'}
const smsGI3 = () => { return '*НАЗВАНИЕ ГРУППЫ*'}
const smsGI4 = () => { return '*ОПИСАНИЕ ГРУППЫ*'}
const smsGI5 = () => { return '*НЕТ ОПИСАНИЯ*'}
const smsGI6 = () => { return '*КОЛИЧЕСТВО ПОЛЬЗОВАТЕЛЕЙ*'}
const smsGI7 = () => { return '*ПОЛЬЗОВАТЕЛИ*'}
const smsGI8 = () => { return '*СОЗДАТЕЛЬ ГРУППЫ*'}
const smsGI9 = () => { return '*АДМИНИСТРАТОРЫ ГРУППЫ*'}
const smsGI10 = () => { return '⚙️ НАСТРОЙКИ ГРУППЫ'}


//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ОТМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ ЧЕЛОВЕКА, КОТОРОГО ВЫ ХОТИТЕ УДАЛИТЬ*\n\n*ПРИМЕР: `}
const smskick2 = () => { return `УДАЛЕН 😼🫵`}
const smskick3 = () => { return `Я НЕ МОГУ УДАЛИТЬ СОЗДАТЕЛЯ ГРУППЫ 😆🫵`}
const smskick4 = () => { return `НЕ В ЭТОЙ ГРУППЕ 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ СОЗЫВ ГРУППЫ ⚡`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}*ПРОЩАНИЕ С ГРУППОЙ БЫЛО НАСТРОЕНО*`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИ ПРОЩАЛЬНОЕ ПОСЛАНИЕ_*\n*_НЕОБЯЗАТЕЛЬНО, ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО НАЧИНАЕТСЯ С "@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Упоминание пользователю)*\n\n*ПОМНИТЕ, ЧТО "@" - ЭТО НЕОБЯЗАТЕЛЬНО*`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}*GROUP WELCOME HAS BEEN SET UP*`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}🙌 *_НАПИШИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ_*\n*_НЕОБЯЗАТЕЛЬНО, ВЫ МОЖЕТЕ ИСПОЛЬЗОВАТЬ ТО, ЧТО НАЧИНАЕТСЯ С "@", ЧТОБЫ ДОБАВИТЬ ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ:_*\n\n*⚡ @user (Упоминание пользователю)*\n*⚡ @subject (Название группы)*\n*⚡ @desc (Описание группы)*\n\n*ПОМНИТЕ, ЧТО "@" ЯВЛЯЮТСЯ НЕОБЯЗАТЕЛЬНЫМИ*`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}*ОПИСАНИЕ ГРУППЫ НАСТРОЕНО*`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*ИМЯ ГРУППЫ БЫЛО ЗАДАНО*`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*🙌 ВВЕДИТЕ НОВОЕ НАЗВАНИЕ ГРУППЫ*`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}*НАЗВАНИЕ ГРУППЫ НЕ ДОЛЖНО СОДЕРЖАТЬ БОЛЕЕ 25 СИМВОЛОВ*`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}*ССЫЛКА НА ГРУППУ БЫЛА СБРОШЕНА!*`}


export default { lenguaje, smsAvisoRG, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp};
