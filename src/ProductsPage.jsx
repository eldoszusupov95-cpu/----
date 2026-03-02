import axios from "axios";
import { useState, useEffect } from "react";

const API = "https://69a0082c3188b0b1d5378674.mockapi.io/eldos/eeee";

const SHOP_WHATSAPP = "+996755111612"; 
const SHOP_NAME = "Versel";

const EXTRA_IMGS = {
  1:  ["https://avatars.mds.yandex.net/i?id=ca88cb399ce88afbdcb7044b5315a6f6908a1754-5239608-images-thumbs&n=13","https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/s/a/samsung_myshop-pk-1_1_3.jpg","https://multibrandmobile.ru/wp-content/uploads/2024/12/bde40f7249e207acede2dfc57400acbd-900x626.png"],
  2:  ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80","https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80","https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"],
  3:  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOZ9kJduitenEbjVDgtNPw4_9e73tO-1RTg&s","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80"],
  4:  ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkYDC5QF3G_saWkz4HHU8hwG6OYahqqHTvA&s","https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80","https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80"],
  5:  ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80","https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80"],
  6:  ["https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80","https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"],
  7:  ["https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80","https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80","https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80"],
  8:  ["https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80","https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80","https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"],
  9:  ["https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80"],
  10: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFwh0tg8ssNO-M9o0AkBCcDmKmbcaT7Z5Ug&s","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80"],
  11: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80","https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80","https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80"],
  12: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80","https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80","https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"],
  13: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"],
  14: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFwh0tg8ssNO-M9o0AkBCcDmKmbcaT7Z5Ug&s","https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"],
  15: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80","https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80","https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"],
  16: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80","https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"],
  17: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80"],
  18: ["https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"],
  19: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80","https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80","https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80"],
  20: ["https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80","https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80"],
  21: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80","https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"],
  22: ["https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80"],
  23: ["https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
  24: ["https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80","https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80"],
  25: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80","https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80"],
  26: ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80"],
  27: ["https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80","https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
  28: ["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80","https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80"],
  29: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80","https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"],
  30: ["https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80","https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80","https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"],
  31: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80","https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],
  32: ["https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80","https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"],
  33: ["https://basket-12.wbbasket.ru/vol1766/part176610/176610272/images/c246x328/2.webp","https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80","https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80"],
  34: ["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],
  35: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80","https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80","https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80"],
  36: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"],
  37: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80","https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80","https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80"],
  38: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80"],
  39: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80","https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80","https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"],
  40: ["https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80","https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"],
  41: ["https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80","https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80","https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80"],
  42: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"],

  43: ["https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80","https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80"],
  44: ["https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80","https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80","https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"],
  45: ["https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80","https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80"],
  46: ["https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80","https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"],
  47: ["https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80","https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80"],
  48: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80","https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80"],
  49: ["https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80","https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80","https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"],
  50: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80","https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80","https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"],
  51: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80"],
  52: ["https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80","https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80","https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80"],
  53: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80","https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80"],
  54: ["https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80","https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80","https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80"],
  55: ["https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80","https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80","https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80"],
  56: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80","https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"],
  57: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80","https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"],
  58: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80","https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80","https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80"],
  59: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80"],
  60: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80","https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80","https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80"],
  61: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80","https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80","https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"],
  62: ["https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80"],
  63: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80","https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"],
  64: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80"],
  65: ["https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"],
  66: ["https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80","https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80"],
  67: ["https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80","https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80","https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80"],
  68: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80","https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80","https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80"],
  69: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80","https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80"],
  70: ["https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80","https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80","https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80"],
  71: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80","https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80","https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80"],
  72: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80","https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80"],
  73: ["https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80","https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
  74: ["https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80","https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80"],
  75: ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80"],
  76: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80","https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80"],
  77: ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80","https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
  78: ["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80","https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80"],
  79: ["https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80","https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"],
  80: ["https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80","https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],
  81: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80","https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80","https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80"],
  82: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80","https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"],
  83: ["https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80","https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"],
  84: ["https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80","https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"],
  85: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80","https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80","https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80"],
  86: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"],
  87: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80","https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80","https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80"],
  88: ["https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80","https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"],
  89: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80","https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80","https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80"],
  90: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80"],
  91: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80","https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80","https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80"],
  92: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"],
  93: ["https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80","https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80","https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80"],
  94: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80","https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80","https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80"],
  95: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80","https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80","https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80"],
  96: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80"],
  97: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80","https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80","https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80"],
  98: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80","https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80"],
  99: ["https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80","https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80","https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"],
  100:["https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80","https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80","https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80"],

};

const DATA = [
  { id:1,  cat:"Телефондор",   title:"Samsung Galaxy S24 Ultra", price:99999,  stock:15, desc:"Snapdragon 8 Gen 3, 200MP камера, 5000mAh, Dynamic AMOLED 6.8",    img:"https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80",  badge:"Хит"   },
  { id:2,  cat:"Телефондор",   title:"iPhone 15 Pro Max",        price:129999, stock:3,  desc:"A17 Pro, Titanium, 48MP тройная камера, USB-C, 5G",                img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",  badge:"Жаңы"  },
  { id:3,  cat:"Телефондор",   title:"Xiaomi 14 Pro",            price:59999,  stock:5,  desc:"Snapdragon 8 Gen 3, Leica 50MP, 4880mAh, HyperOS",                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOZ9kJduitenEbjVDgtNPw4_9e73tO-1RTg&s",  badge:null    },
  { id:4,  cat:"Телефондор",   title:"Google Pixel 8 Pro",       price:84999,  stock:8,  desc:"Google Tensor G3, 50MP, AI функциялар, 5050mAh",                  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkYDC5QF3G_saWkz4HHU8hwG6OYahqqHTvA&s",  badge:"Акция" },
  { id:5,  cat:"Телефондор",   title:"OnePlus 12",               price:64999,  stock:2,  desc:"Snapdragon 8 Gen 3, Hasselblad камера, 5400mAh, 100W заряд",      img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",  badge:null    },
  { id:6,  cat:"Телефондор",   title:"Samsung Galaxy A55",       price:34999,  stock:22, desc:"Exynos 1480, 50MP OIS, 5000mAh, Super AMOLED 6.6",               img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",  badge:"Арзан" },
  { id:7,  cat:"Телефондор",   title:"Xiaomi Redmi Note 13",     price:19999,  stock:45, desc:"6.67 AMOLED 120Hz, 108MP, 5000mAh, 33W заряд",                   img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80",  badge:"Арзан" },
  { id:8,  cat:"Телефондор",   title:"iPhone 14",                price:69999,  stock:7,  desc:"A15 Bionic, 6.1 Super Retina XDR, 12MP камера, 5G",              img:"https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",  badge:"Акция" },
  { id:9,  cat:"Телефондор",   title:"Honor 90 Pro",             price:44999,  stock:3,  desc:"200MP тройная камера, 6.78 OLED, 100W заряд",                    img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80",  badge:"Жаңы"  },
  { id:10, cat:"Эркек кийим",  title:"Nike Air Force Худи",      price:4999,   stock:30, desc:"100% органик хлопок, оверсайз, кенгуру карман, 5 түс",           img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFwh0tg8ssNO-M9o0AkBCcDmKmbcaT7Z5Ug&s",  badge:null    },
  { id:11, cat:"Эркек кийим",  title:"Levi's 501 Джинс",         price:6999,   stock:4,  desc:"Классик прямой крой, 100% деним, 5 карман, 5 түс",               img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",  badge:"Хит"   },
  { id:12, cat:"Эркек кийим",  title:"Adidas Track Jacket",      price:5499,   stock:0,  desc:"100% полиэстер, молния, спорт стиль, 3 полосы",                  img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",  badge:null    },
  { id:13, cat:"Эркек кийим",  title:"H&M Классик Костюм",       price:12999,  stock:7,  desc:"Wool blend, slim fit, пиджак + шым, 3 түс",                      img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",  badge:"Жаңы"  },
  { id:14, cat:"Эркек кийим",  title:"Supreme Box Logo Tee",     price:3999,   stock:1,  desc:"100% хлопок, культовый логотип, унисекс",                        img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",  badge:null    },
  { id:15, cat:"Эркек кийим",  title:"Zara Slim Жейде",          price:2999,   stock:25, desc:"100% хлопок, slim fit, деловой стиль, 8 түс",                    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",  badge:null    },
  { id:16, cat:"Эркек кийим",  title:"Puma Зимний Пуховик",      price:15999,  stock:5,  desc:"Down fill, -20C чейин жылытат, водонепроницаемый",               img:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",  badge:"Жаңы"  },
  { id:17, cat:"Аял кийим",    title:"Zara Флорал Көйнөк",       price:3999,   stock:12, desc:"Жибек материал, цветочный принт, midi узундук, V-вырез",          img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",  badge:"Хит"   },
  { id:18, cat:"Аял кийим",    title:"H&M Жаздык Блузка",        price:2499,   stock:0,  desc:"Легкий хлопок, свободный крой, 6 цветов",                        img:"https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80",  badge:null    },
  { id:19, cat:"Аял кийим",    title:"Mango Бизнес Костюм",      price:14999,  stock:5,  desc:"Шерсть blend, slim fit, пиджак + шым, офис стиль",               img:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",  badge:"Жаңы"  },
  { id:20, cat:"Аял кийим",    title:"Levi's Skinny Джинс",      price:5999,   stock:9,  desc:"Stretch деним, high-waist, 4 түс, ankle length",                 img:"https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80",  badge:null    },
  { id:21, cat:"Аял кийим",    title:"Nike Sport Леггинс",       price:3799,   stock:3,  desc:"Dri-FIT, высокая талия, компрессия, спорт",                      img:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",  badge:"Акция" },
  { id:22, cat:"Аял кийим",    title:"Zara Midi Этек",           price:4499,   stock:14, desc:"Сатен материал, A-силуэт, 5 түс, эластичный пояс",               img:"https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80",  badge:"Хит"   },
  { id:23, cat:"Балдар кийим", title:"Nike Kids Костюм",         price:3499,   stock:20, desc:"Дышащий полиэстер, 4-14 жаш, худи + шым, 3 түс",                img:"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80",  badge:"Хит"   },
  { id:24, cat:"Балдар кийим", title:"H&M Балдар Джинс",         price:1999,   stock:0,  desc:"Stretch деним, регулируемый пояс, 2-12 жаш",                    img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80",  badge:null    },
  { id:25, cat:"Балдар кийим", title:"Adidas Кроссовки Kids",    price:4999,   stock:6,  desc:"Cloudfoam, mesh верх, жеңил, размер 28-38",                      img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",  badge:"Жаңы"  },
  { id:26, cat:"Балдар кийим", title:"Пуховик Kiko",             price:5999,   stock:2,  desc:"-30C чейин жылытат, светоотражающий, 3-12 жаш",                  img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",  badge:null    },
  { id:27, cat:"Балдар кийим", title:"H&M Пижама",               price:1499,   stock:35, desc:"Мягкий хлопок, принт динозавр, 2-10 жаш",                       img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80",  badge:"Арзан" },
  { id:28, cat:"Оюнчуктар",   title:"LEGO City Полиция",        price:3999,   stock:14, desc:"500 деталь, участок + машина, жашы 6+",                          img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",  badge:"Хит"   },
  { id:29, cat:"Оюнчуктар",   title:"Barbie Dreamhouse",        price:8999,   stock:0,  desc:"3 этаж, 8 бөлмө, лифт, 70+ аксессуар",                          img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",  badge:null    },
  { id:30, cat:"Оюнчуктар",   title:"Hot Wheels 20 машина",     price:1999,   stock:33, desc:"Металл литой, масштаб 1:64, коллекционный",                      img:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",  badge:"Арзан" },
  { id:31, cat:"Оюнчуктар",   title:"Интерактивдүү робот",      price:6999,   stock:4,  desc:"Добуш таанийт, 50+ команда, LED, 2 саат иштейт",                 img:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",  badge:"Жаңы"  },
  { id:32, cat:"Оюнчуктар",   title:"Плюш Аюу 50см",           price:1299,   stock:1,  desc:"Жумшак плюш, гипоаллергенный, 4 түс",                            img:"https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80",  badge:null    },
  { id:33, cat:"Оюнчуктар",   title:"UNO Карточка Оюну",        price:899,    stock:50, desc:"2-10 оюнчу, 112 карта, классика, жашы 7+",                       img:"https://basket-12.wbbasket.ru/vol1766/part176610/176610272/images/c246x328/2.webp",  badge:"Хит"   },
  { id:34, cat:"Оюнчуктар",   title:"LEGO Technic BMW",         price:12999,  stock:6,  desc:"2000 деталь, иштеген мотор, жашы 18+",                           img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",  badge:"Жаңы"  },
  { id:35, cat:"Электроника",  title:"MacBook Pro 16 M3",        price:249999, stock:5,  desc:"Apple M3 Pro 12-ядро, 18GB RAM, 512GB SSD, Liquid Retina XDR",   img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",  badge:"Жаңы"  },
  { id:36, cat:"Электроника",  title:"Sony WH-1000XM5",          price:34999,  stock:11, desc:"Лучшее ANC, 30 саат батарея, LDAC Hi-Res, мультиточка",          img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",  badge:null    },
  { id:37, cat:"Электроника",  title:"iPad Pro 12.9",            price:119999, stock:0,  desc:"Apple M2, Liquid Retina XDR, 256GB, Thunderbolt",                img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",  badge:null    },
  { id:38, cat:"Электроника",  title:"Apple Watch Ultra 2",      price:79999,  stock:3,  desc:"Titanium, GPS+Cellular, 60 саат батарея, 100м суу чыдам",        img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",  badge:"Хит"   },
  { id:39, cat:"Электроника",  title:"Samsung 65 QLED TV",       price:189999, stock:2,  desc:"QD-OLED 4K 144Hz, HDR10+, Smart TV, Dolby Atmos",                img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",  badge:"Жаңы"  },
  { id:40, cat:"Электроника",  title:"PlayStation 5",            price:74999,  stock:0,  desc:"4K 120fps, Ray Tracing, SSD 825GB, DualSense",                   img:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80",  badge:"Хит"   },
  { id:41, cat:"Электроника",  title:"Nintendo Switch OLED",     price:44999,  stock:8,  desc:"7 дюйм OLED, 64GB, Joy-Con, портативный + TV режим",             img:"https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80",  badge:"Акция" },
  { id:42, cat:"Электроника",  title:"JBL Charge 5",             price:19999,  stock:16, desc:"40W RMS, IP67, 20 саат, PartyBoost, USB-C",                      img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",  badge:null    },

  // ── Телефондор (id 43-57) ──────────────────────────────────────────────────
  { id:43, cat:"Телефондор", title:"Samsung Galaxy S23",        price:74999,  stock:10, desc:"Snapdragon 8 Gen 2, 50MP камера, 3900mAh, Dynamic AMOLED 6.1",   img:"https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80",  badge:"Акция" },
  { id:44, cat:"Телефондор", title:"iPhone 13",                 price:54999,  stock:12, desc:"A15 Bionic, 12MP камера, 3227mAh, Super Retina XDR 6.1",         img:"https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80",  badge:"Арзан" },
  { id:45, cat:"Телефондор", title:"Xiaomi Redmi 12",           price:12999,  stock:30, desc:"Helio G88, 50MP, 5000mAh, 33W заряд, 6.79 FHD+",                 img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80",  badge:"Арзан" },
  { id:46, cat:"Телефондор", title:"Realme 11 Pro+",            price:29999,  stock:8,  desc:"Dimensity 7050, 200MP камера, 5000mAh, 67W заряд",               img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",  badge:null    },
  { id:47, cat:"Телефондор", title:"OPPO Reno 11",              price:39999,  stock:6,  desc:"Dimensity 8200, 50MP тройная, 4800mAh, 80W заряд",               img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80",  badge:"Жаңы"  },
  { id:48, cat:"Телефондор", title:"Vivo V29",                  price:34999,  stock:4,  desc:"Snapdragon 778G, 50MP, 4600mAh, 44W, 6.78 AMOLED",              img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",  badge:null    },
  { id:49, cat:"Телефондор", title:"Samsung Galaxy Z Flip5",    price:109999, stock:3,  desc:"Snapdragon 8 Gen 2, 12MP, 3700mAh, складной AMOLED",             img:"https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80",  badge:"Жаңы"  },
  { id:50, cat:"Телефондор", title:"iPhone SE 3",               price:44999,  stock:7,  desc:"A15 Bionic, 12MP, 2018mAh, Touch ID, 4.7 Retina",               img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",  badge:"Арзан" },
  { id:51, cat:"Телефондор", title:"Tecno Spark 20 Pro",        price:9999,   stock:25, desc:"Helio G85, 108MP, 5000mAh, 33W, 6.78 HD+",                      img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",  badge:"Арзан" },
  { id:52, cat:"Телефондор", title:"Motorola Edge 40",          price:32999,  stock:5,  desc:"Dimensity 8020, 50MP OIS, 4400mAh, 68W, IP68",                  img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&q=80",  badge:null    },
  { id:53, cat:"Телефондор", title:"Nokia G42",                 price:14999,  stock:9,  desc:"Snapdragon 480+, 50MP, 5000mAh, Android 13, жөнөкөй",           img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",  badge:null    },
  { id:54, cat:"Телефондор", title:"Asus ROG Phone 7",          price:89999,  stock:2,  desc:"Snapdragon 8 Gen 2, 165Hz AMOLED, 6000mAh, геймерский",          img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=80",  badge:"Хит"   },
  { id:55, cat:"Телефондор", title:"Sony Xperia 5 V",           price:79999,  stock:3,  desc:"Snapdragon 8 Gen 2, 48MP Zeiss, 5000mAh, 6.1 OLED 120Hz",       img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",  badge:null    },

  // ── Эркек кийим (id 56-68) ────────────────────────────────────────────────
  { id:56, cat:"Эркек кийим", title:"Under Armour Спорт Жейде", price:3499,  stock:18, desc:"UA Tech материал, быстросохнущий, спорт, 6 түс",                  img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",  badge:null    },
  { id:57, cat:"Эркек кийим", title:"Tommy Hilfiger Поло",      price:5999,  stock:10, desc:"100% хлопок, classic fit, вышитый логотип, 8 түс",               img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",  badge:"Хит"   },
  { id:58, cat:"Эркек кийим", title:"Calvin Klein Свитшот",     price:7499,  stock:6,  desc:"Французский махра, оверсайз, CK логотип, 4 түс",                  img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",  badge:null    },
  { id:59, cat:"Эркек кийим", title:"Adidas Ultraboost 23",     price:14999, stock:7,  desc:"Boost подошва, Primeknit верх, нейтральный бег",                  img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",  badge:"Жаңы"  },
  { id:60, cat:"Эркек кийим", title:"Nike Dri-FIT Шым",         price:4499,  stock:14, desc:"Dri-FIT технология, эластичный пояс, спорт, 5 түс",               img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",  badge:null    },
  { id:61, cat:"Эркек кийим", title:"Levis Trucker Жакет",      price:9999,  stock:5,  desc:"100% деним, classic fit, нагрудный карман, 3 түс",               img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",  badge:"Акция" },
  { id:62, cat:"Эркек кийим", title:"New Balance 574",          price:11999, stock:8,  desc:"Suede/mesh верх, ENCAP подошва, классика, 6 түс",                img:"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80",  badge:null    },
  { id:63, cat:"Эркек кийим", title:"Polo Ralph Lauren Свитер", price:12999, stock:4,  desc:"100% шерсть, v-образный вырез, логотип, 5 түс",                  img:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",  badge:"Жаңы"  },

  // ── Аял кийим (id 64-76) ─────────────────────────────────────────────────
  { id:64, cat:"Аял кийим", title:"Zara Тротуар Куртка",        price:8999,  stock:9,  desc:"Трикотаж + синтепон, оверсайз, 4 түс",                           img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",  badge:"Жаңы"  },
  { id:65, cat:"Аял кийим", title:"H&M Трикотаж Көйнөк",       price:3499,  stock:11, desc:"Ребристый трикотаж, midi узундук, облегающий крой",              img:"https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80",  badge:"Хит"   },
  { id:66, cat:"Аял кийим", title:"Mango Кожаный Жакет",        price:16999, stock:3,  desc:"Эко-кожа, fitted, застёжка-молния, 2 түс",                       img:"https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80",  badge:null    },
  { id:67, cat:"Аял кийим", title:"Pull&Bear Oversize Худи",    price:3999,  stock:20, desc:"100% хлопок, оверсайз, кенгуру карман, 7 түс",                   img:"https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80",  badge:"Арзан" },
  { id:68, cat:"Аял кийим", title:"Adidas Stan Smith Ж.",       price:9999,  stock:6,  desc:"Кожаный верх, резиновая подошва, classic, белый+зелёный",         img:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",  badge:null    },
  { id:69, cat:"Аял кийим", title:"Bershka Satin Блузка",       price:2999,  stock:15, desc:"Сатин, V-образный вырез, флорал принт, 5 түс",                   img:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",  badge:"Акция" },
  { id:70, cat:"Аял кийим", title:"Stradivarius Мини Этек",     price:2499,  stock:8,  desc:"Рубчик, мини длина, эластичный пояс, 4 түс",                     img:"https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80",  badge:null    },
  { id:71, cat:"Аял кийим", title:"Nike Air Max 270 Ж.",        price:12999, stock:4,  desc:"Air Max подушка, mesh верх, лёгкий, 8 түс",                      img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",  badge:"Хит"   },

  // ── Балдар кийим (id 72-82) ───────────────────────────────────────────────
  { id:72, cat:"Балдар кийим", title:"Nike Kids Кроссовки",     price:5999,  stock:12, desc:"Flyknit верх, Air подошва, жеңил, размер 28-38",                 img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",  badge:"Хит"   },
  { id:73, cat:"Балдар кийим", title:"Zara Kids Жайкы Көйнөк",  price:1799,  stock:15, desc:"100% хлопок, принт мультик, 2-12 жаш",                           img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80",  badge:null    },
  { id:74, cat:"Балдар кийим", title:"H&M Балдар Жайкы Топ",    price:999,   stock:30, desc:"Лёгкий хлопок, яркий принт, 2-10 жаш, 5 түс",                   img:"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80",  badge:"Арзан" },
  { id:75, cat:"Балдар кийим", title:"Adidas Kids Спортивный",   price:3999,  stock:8,  desc:"Полиэстер, лампасы, свободный крой, 4-14 жаш",                   img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",  badge:null    },
  { id:76, cat:"Балдар кийим", title:"Crocs Kids Classic",       price:2999,  stock:18, desc:"Foam материал, лёгкий, быстросохнущий, размер 20-34",            img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",  badge:"Жаңы"  },
  { id:77, cat:"Балдар кийим", title:"Reima Балдар Куртка",      price:7999,  stock:5,  desc:"Водонепроницаемый, -10C, светоотражающий, 3-12 жаш",             img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",  badge:null    },

  // ── Оюнчуктар (id 78-90) ─────────────────────────────────────────────────
  { id:78, cat:"Оюнчуктар", title:"LEGO Friends Үй",            price:5999,  stock:8,  desc:"700 деталь, 4 мини-фигура, жашы 6+",                             img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",  badge:null    },
  { id:79, cat:"Оюнчуктар", title:"Jenga Оюну",                 price:1499,  stock:22, desc:"54 блок, жыгач, 2+ оюнчу, жашы 6+",                             img:"https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80",  badge:"Арзан" },
  { id:80, cat:"Оюнчуктар", title:"Monopoly Classic",           price:2499,  stock:14, desc:"Классикалык нускасы, 2-8 оюнчу, кыргызча нускасы",              img:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",  badge:"Хит"   },
  { id:81, cat:"Оюнчуктар", title:"Nerf Elite 2.0",             price:3499,  stock:7,  desc:"20 дротик, дальность 27м, жашы 8+",                              img:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",  badge:null    },
  { id:82, cat:"Оюнчуктар", title:"Play-Doh 10 түс",            price:1999,  stock:28, desc:"10 баночка, жашы 3+, нетоксичный",                               img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",  badge:"Арзан" },
  { id:83, cat:"Оюнчуктар", title:"Rubik's Cube 3x3",           price:999,   stock:35, desc:"Классика, скоростной механизм, жашы 8+",                         img:"https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80",  badge:null    },
  { id:84, cat:"Оюнчуктар", title:"Конструктор Магниттик",      price:4999,  stock:9,  desc:"100 деталь, магниттик тилкелер, жашы 3+",                        img:"https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",  badge:"Жаңы"  },
  { id:85, cat:"Оюнчуктар", title:"Remote Control Машина",      price:3999,  stock:11, desc:"2.4GHz, 1:20 масштаб, 30 мин иштейт, жашы 6+",                  img:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",  badge:null    },

  // ── Электроника (id 86-100) ───────────────────────────────────────────────
  { id:86, cat:"Электроника", title:"AirPods Pro 2",            price:29999, stock:9,  desc:"ANC, Adaptive Transparency, USB-C, 30 саат кейс",               img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",  badge:"Хит"   },
  { id:87, cat:"Электроника", title:"Samsung Galaxy Tab S9",    price:89999, stock:4,  desc:"Snapdragon 8 Gen 2, 11 AMOLED 120Hz, 256GB, IP68",              img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",  badge:"Жаңы"  },
  { id:88, cat:"Электроника", title:"Logitech MX Master 3S",    price:12999, stock:13, desc:"8K DPI, тихий клик, USB-C, 70 саат, Bluetooth",                 img:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80",  badge:null    },
  { id:89, cat:"Электроника", title:"Dell XPS 15",              price:189999,stock:2,  desc:"Intel i7-13700H, 16GB, 512GB SSD, OLED 3.5K, RTX 4060",        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",  badge:"Жаңы"  },
  { id:90, cat:"Электроника", title:"GoPro Hero 12",            price:44999, stock:6,  desc:"5.3K видео, HyperSmooth 6.0, IP68, 30fps HDR",                  img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",  badge:null    },
  { id:91, cat:"Электроника", title:"Kindle Paperwhite 5",      price:14999, stock:10, desc:"6.8 E-Ink, IPX8, 300 PPI, 10 жума батарея, 32GB",              img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",  badge:"Арзан" },
  { id:92, cat:"Электроника", title:"Bose SoundLink Max",       price:39999, stock:5,  desc:"IP67, 20 саат, Bluetooth 5.3, USB-C зарядка",                   img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",  badge:null    },
  { id:93, cat:"Электроника", title:"Xbox Series X",            price:79999, stock:0,  desc:"4K 120fps, 1TB SSD, Ray Tracing, Game Pass",                    img:"https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80",  badge:"Хит"   },
  { id:94, cat:"Электроника", title:"DJI Mini 4 Pro",           price:89999, stock:3,  desc:"4K/60fps, 34 мин учуш, 3-ось gimbal, omnidirectional",          img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",  badge:"Жаңы"  },
  { id:95, cat:"Электроника", title:"LG 27 4K Monitor",         price:54999, stock:4,  desc:"IPS, 144Hz, HDR10, USB-C 96W, Ergo Stand",                     img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",  badge:null    },
  { id:96, cat:"Электроника", title:"Anker 10000mAh PowerBank", price:4999,  stock:20, desc:"22.5W быстрый заряд, 2 USB-C, компактный",                      img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",  badge:"Арзан" },
  { id:97, cat:"Электроника", title:"Xiaomi Smart TV 55",       price:79999, stock:5,  desc:"4K QLED, 60Hz, Android TV 12, Dolby Vision + Atmos",            img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",  badge:"Акция" },
  { id:98, cat:"Электроника", title:"Canon EOS R50",            price:89999, stock:3,  desc:"24MP APS-C, 4K видео, Dual Pixel AF, Wi-Fi, компактный",        img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",  badge:"Жаңы"  },
  { id:99, cat:"Электроника", title:"Apple TV 4K 3-gen",        price:19999, stock:7,  desc:"A15 Bionic, 4K HDR, Dolby Atmos, Siri Remote, Thread",          img:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&q=80",  badge:null    },
  { id:100,cat:"Электроника", title:"Razer BlackWidow V4",      price:14999, stock:6,  desc:"Механикалык, Green Switch, RGB, USB passthrough, геймерский",   img:"https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80",  badge:null    },
];

const CATS  = ["Баары","Телефондор","Эркек кийим","Аял кийим","Балдар кийим","Оюнчуктар","Электроника"];
const ICONS = {"Баары":"🏪","Телефондор":"📱","Эркек кийим":"👔","Аял кийим":"👗","Балдар кийим":"🧒","Оюнчуктар":"🧸","Электроника":"💻"};
const BC    = {"Хит":{bg:"#ef4444",c:"#fff"},"Жаңы":{bg:"#922b21",c:"#fff"},"Акция":{bg:"#f59e0b",c:"#fff"},"Арзан":{bg:"#22c55e",c:"#fff"}};
const SZ    = {"Эркек кийим":["XS","S","M","L","XL","XXL"],"Аял кийим":["XS","S","M","L","XL","XXL"],"Балдар кийим":["2-3 жаш","4-5 жаш","6-7 жаш","8-9 жаш","10-11 жаш","12-14 жаш"]};

// ─── WHATSAPP БИЛДИРҮҮ ЖИБЕР ─────────────────────────────────────────────────
function sendWhatsAppOrder(cart, user) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const date = new Date().toLocaleString("ru-RU");
  
  let msg = `🛒 *ЖАҢЫ ЗАКАЗ — ${SHOP_NAME}*\n`;
  msg += `📅 ${date}\n\n`;
  
  if (user) {
    msg += `👤 *Кардар:* ${user.name}\n`;
    if (user.phone) msg += `📞 *Телефон:* ${user.phone}\n`;
    msg += `✉️ *Email:* ${user.email}\n\n`;
  } else {
    msg += `👤 *Кардар:* Кирбеген колдонуучу\n\n`;
  }
  
  msg += `📦 *Заказдалган товарлар:*\n`;
  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.title}`;
    if (item.size) msg += ` (${item.size})`;
    msg += ` × ${item.qty} шт. = ${(item.price * item.qty).toLocaleString()} ₽\n`;
  });
  
  msg += `\n💰 *ИТОГО: ${total.toLocaleString()} ₽*`;
  msg += `\n\n✅ Заказ кабыл алуу үчүн кардар менен байланышыңыз!`;
  
  const phone = SHOP_WHATSAPP.replace(/[^0-9]/g, "");
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// ─── SESSION ENCODE/DECODE ──────────────────────────────────────────────────
const _e = d => btoa(unescape(encodeURIComponent(JSON.stringify(d))));
const _d = s => { try { return JSON.parse(decodeURIComponent(escape(atob(s)))); } catch { return null; } }

// ─── VERSEL LOGO SVG — V-канат стили (кызыл линия) ─────────────────────────
function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Сырткы V канаттар */}
      <polyline points="2,2 22,2 40,42 58,2 78,2 40,68 2,2" fill="none" stroke="#c0392b" strokeWidth="2.8" strokeLinejoin="miter" strokeLinecap="round"/>
      {/* Ички V — кичине */}
      <polyline points="18,2 30,2 40,28 50,2 62,2 40,48 18,2" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinejoin="miter" strokeLinecap="round"/>
      {/* Эң ички V */}
      <polyline points="28,14 34,14 40,26 46,14 52,14 40,38 28,14" fill="none" stroke="#c0392b" strokeWidth="1.5" strokeLinejoin="miter" strokeLinecap="round"/>
    </svg>
  );
}

function StockTag({n, sm}) {
  const sz = sm ? "0.63rem" : "0.78rem";
  const pd = sm ? "2px 7px" : "4px 12px";
  if (n === 0) return <span style={{fontSize:sz,fontWeight:700,color:"#dc2626",background:"#fef2f2",padding:pd,borderRadius:20,whiteSpace:"nowrap"}}>✕ Жок</span>;
  if (n <= 3)  return <span style={{fontSize:sz,fontWeight:700,color:"#d97706",background:"#fffbeb",padding:pd,borderRadius:20,whiteSpace:"nowrap"}}>⚠ {n} калды</span>;
  return              <span style={{fontSize:sz,fontWeight:700,color:"#16a34a",background:"#f0fdf4",padding:pd,borderRadius:20,whiteSpace:"nowrap"}}>✓ {n} бар</span>;
}

// ─── AUTH MODAL ────────────────────────────────────────────────────────────────
function AuthModal({mode, onClose, onLogin}) {
  const [tab,     setTab]     = useState(mode);
  const [f,       setF]       = useState({name:"",email:"",password:"",phone:"",avatar:""});
  const [show,    setShow]    = useState(false);
  const [err,     setErr]     = useState("");
  const [loading, setLoading] = useState(false);
  const up = e => setF({...f,[e.target.name]:e.target.value});

  async function go() {
    setErr(""); setLoading(true);
    try {
      if (tab === "login") {
        const res = await axios.get(API);
        const found = res.data.find(u => u.email === f.email && u.password === f.password);
        if (found) {
          const safeUser = { id: found.id, name: found.name, email: found.email, phone: found.phone, avatar: found.avatar };
          onLogin(safeUser); onClose();
        } else {
          setErr("Email же сырсөз туура эмес!");
        }
      } else {
        if (!f.name || !f.email || !f.password) { setErr("Аты, email жана сырсөз керек!"); setLoading(false); return; }
        if (f.password.length < 6) { setErr("Сырсөз кеминде 6 символ!"); setLoading(false); return; }
        const checkRes = await axios.get(API);
        if (checkRes.data.find(u => u.email === f.email)) { setErr("Бул email буга чейин катталган!"); setLoading(false); return; }
        const response = await axios.post(API, {
          name: f.name, password: f.password, email: f.email,
          phone: f.phone,
          avatar: f.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(f.name)}`,
        });
        if (response.status === 201) {
          const safeUser = { id: response.data.id, name: response.data.name, email: response.data.email, phone: response.data.phone, avatar: response.data.avatar };
          onLogin(safeUser); onClose();
        }
      }
    } catch(e) {
      setErr("Тармак катасы. Кайра аракет кылыңыз.");
    } finally { setLoading(false); }
  }

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}} onClick={onClose}>
      <div style={{background:"#fffaf8",borderRadius:20,padding:"34px 30px",width:380,maxWidth:"95vw",boxShadow:"0 24px 64px rgba(0,0,0,0.2)",position:"relative",maxHeight:"95vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} style={{position:"absolute",top:14,right:16,background:"none",border:"none",fontSize:"1.1rem",cursor:"pointer",color:"#94a3b8"}}>✕</button>
        <div style={{textAlign:"center",marginBottom:22}}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginBottom:8}}>
            <Logo size={40}/>
            <div style={{fontWeight:900,fontSize:"1.4rem",color:"#0f172a",letterSpacing:"-0.03em"}}>Versel</div>
          </div>
          <div style={{fontSize:"0.78rem",color:"#94a3b8",marginTop:2}}>Кош келдиңиз!</div>
        </div>
        <div style={{display:"flex",background:"#f1f5f9",borderRadius:10,padding:3,marginBottom:18,gap:3}}>
          {[["login","→ Кирүү"],["signup","+ Катталуу"]].map(([k,l])=>(
            <button key={k} onClick={()=>{setTab(k);setErr("");}}
              style={{flex:1,padding:"8px",border:"none",borderRadius:7,cursor:"pointer",fontWeight:700,fontSize:"0.88rem",
                background:tab===k?"#fff":"transparent",color:tab===k?"#c0392b":"#94a3b8",
                boxShadow:tab===k?"0 1px 6px rgba(0,0,0,0.1)":"none"}}>{l}</button>
          ))}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {tab==="signup" && <>
            <div style={{display:"flex",alignItems:"center",gap:9,background:"#fdf6f0",border:"1.5px solid #f5d5d0",borderRadius:10,padding:"10px 13px"}}>
              <span>👤</span><input style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"0.9rem"}} name="name" placeholder="Атыңыз *" value={f.name} onChange={up}/>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:9,background:"#fdf6f0",border:"1.5px solid #f5d5d0",borderRadius:10,padding:"10px 13px"}}>
              <span>📞</span><input style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"0.9rem"}} name="phone" placeholder="Телефон (милдеттүү эмес)" value={f.phone} onChange={up}/>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:9,background:"#fdf6f0",border:"1.5px solid #f5d5d0",borderRadius:10,padding:"10px 13px"}}>
              <span>🖼</span><input style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"0.9rem"}} name="avatar" placeholder="Avatar URL (милдеттүү эмес)" value={f.avatar} onChange={up}/>
            </div>
          </>}
          <div style={{display:"flex",alignItems:"center",gap:9,background:"#fdf6f0",border:"1.5px solid #f5d5d0",borderRadius:10,padding:"10px 13px"}}>
            <span>✉️</span><input style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"0.9rem"}} name="email" type="email" placeholder="Email *" value={f.email} onChange={up}/>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:9,background:"#fdf6f0",border:"1.5px solid #f5d5d0",borderRadius:10,padding:"10px 13px"}}>
            <span>🔒</span>
            <input style={{flex:1,border:"none",outline:"none",background:"transparent",fontSize:"0.9rem"}} name="password" type={show?"text":"password"} placeholder="Сырсөз *" value={f.password} onChange={up}/>
            <button style={{background:"none",border:"none",cursor:"pointer",color:"#94a3b8"}} onClick={()=>setShow(!show)}>{show?"🙈":"👁️"}</button>
          </div>
          {err && <div style={{background:"#fef2f2",color:"#dc2626",fontSize:"0.82rem",padding:"8px 12px",borderRadius:8,fontWeight:600}}>⚠️ {err}</div>}
          <button onClick={go} disabled={loading}
            style={{background:loading?"#f1948a":"linear-gradient(135deg,#c0392b,#e74c3c)",color:"#fff",border:"none",borderRadius:10,padding:"12px",fontWeight:700,fontSize:"0.95rem",cursor:loading?"not-allowed":"pointer",marginTop:4,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            {loading
              ? <><span style={{width:14,height:14,border:"2px solid #fff",borderTopColor:"transparent",borderRadius:"50%",display:"inline-block",animation:"spin 0.7s linear infinite"}}></span>Жүктөлүүдө...</>
              : tab==="login"?"Кирүү →":"Катталуу →"}
          </button>
          {tab==="login" && (
            <div style={{textAlign:"center",fontSize:"0.74rem",color:"#94a3b8"}}>
              Аккаунт жокпу? <span onClick={()=>setTab("signup")} style={{color:"#c0392b",cursor:"pointer",fontWeight:700}}>Катталуу</span>
            </div>
          )}
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

// ─── CART ─────────────────────────────────────────────────────────────────────
function CartModal({cart, user, onClose, onRemove, onQty, onOrder}) {
  const total = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const [done, setDone] = useState(false);

  function handleOrder() {
    // WhatsApp'ка билдирүү жибер
    sendWhatsAppOrder(cart, user);
    onOrder();
    setDone(true);
  }

  if (done) return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",zIndex:100,backdropFilter:"blur(4px)",display:"flex",justifyContent:"flex-end"}} onClick={onClose}>
      <div style={{width:390,maxWidth:"100vw",height:"100vh",background:"#fffaf8",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={e=>e.stopPropagation()}>
        <div style={{textAlign:"center",padding:40}}>
          <div style={{fontSize:"5rem",marginBottom:14}}>🎉</div>
          <div style={{fontWeight:900,fontSize:"1.5rem",color:"#16a34a",marginBottom:8}}>Заказ кабыл алынды!</div>
          <div style={{color:"#64748b",fontSize:"0.9rem",marginBottom:8}}>WhatsApp'ка билдирүү жиберилди</div>
          <div style={{color:"#22c55e",fontSize:"0.82rem",marginBottom:24,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
            <span style={{fontSize:"1.2rem"}}>💬</span> Жакында байланышабыз
          </div>
          <button onClick={onClose} style={{background:"linear-gradient(135deg,#c0392b,#e74c3c)",color:"#fff",border:"none",borderRadius:12,padding:"12px 32px",fontWeight:700,cursor:"pointer",fontSize:"1rem"}}>Жабуу</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(15,23,42,0.6)",zIndex:100,backdropFilter:"blur(4px)",display:"flex",justifyContent:"flex-end"}} onClick={onClose}>
      <div style={{width:390,maxWidth:"100vw",height:"100vh",background:"#fffaf8",display:"flex",flexDirection:"column",boxShadow:"-8px 0 40px rgba(0,0,0,0.15)"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 22px",borderBottom:"1px solid #f1f5f9",background:"linear-gradient(135deg,#fff2f0,#f8fafc)"}}>
          <div style={{fontWeight:900,fontSize:"1.05rem",color:"#0f172a"}}>🛒 Корзина <span style={{color:"#e74c3c"}}>({cart.reduce((s,i)=>s+i.qty,0)})</span></div>
          <button onClick={onClose} style={{background:"none",border:"none",fontSize:"1.2rem",cursor:"pointer",color:"#94a3b8"}}>✕</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:14,display:"flex",flexDirection:"column",gap:10}}>
          {cart.length===0
            ? <div style={{textAlign:"center",padding:"60px 0",color:"#cbd5e1"}}><div style={{fontSize:"3.5rem"}}>🛒</div><div style={{marginTop:10,fontWeight:600,fontSize:"0.95rem"}}>Корзина бош</div></div>
            : cart.map(item=>(
              <div key={item.id} style={{display:"flex",gap:10,alignItems:"center",background:"#fdf6f0",borderRadius:12,padding:12,border:"1px solid #fae8e6"}}>
                <img src={item.img} alt="" style={{width:56,height:56,objectFit:"cover",borderRadius:8,flexShrink:0}}/>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:700,fontSize:"0.84rem",color:"#0f172a",marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item.title}</div>
                  {item.size && <div style={{fontSize:"0.72rem",color:"#94a3b8",marginBottom:3}}>Размер: <b style={{color:"#374151"}}>{item.size}</b></div>}
                  <div style={{color:"#ef4444",fontWeight:800,fontSize:"0.9rem",marginBottom:6}}>{(item.price*item.qty).toLocaleString()} ₽</div>
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    <button onClick={()=>onQty(item.id,-1)} style={{width:26,height:26,border:"1.5px solid #f5d5d0",borderRadius:6,background:"#fffaf8",cursor:"pointer",fontWeight:800,fontSize:"0.95rem",display:"flex",alignItems:"center",justifyContent:"center"}}>−</button>
                    <span style={{fontWeight:800,minWidth:22,textAlign:"center"}}>{item.qty}</span>
                    <button onClick={()=>onQty(item.id,+1)} style={{width:26,height:26,border:"1.5px solid #f5d5d0",borderRadius:6,background:"#fffaf8",cursor:"pointer",fontWeight:800,fontSize:"0.95rem",display:"flex",alignItems:"center",justifyContent:"center"}}>+</button>
                  </div>
                </div>
                <button onClick={()=>onRemove(item.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#cbd5e1",fontSize:"1.1rem",padding:4,flexShrink:0}}>🗑</button>
              </div>
            ))
          }
        </div>
        {cart.length>0 && (
          <div style={{padding:"14px 20px",borderTop:"1px solid #f1f5f9",background:"#fdf6f0"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:5,fontSize:"0.85rem",color:"#64748b"}}><span>Товар саны:</span><b style={{color:"#0f172a"}}>{cart.reduce((s,i)=>s+i.qty,0)} шт.</b></div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}><b style={{fontSize:"1rem",color:"#0f172a"}}>Итого:</b><b style={{fontSize:"1.3rem",color:"#ef4444"}}>{total.toLocaleString()} ₽</b></div>
            {/* WhatsApp билдирүүсү */}
            <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"8px 12px",marginBottom:10,display:"flex",alignItems:"center",gap:8,fontSize:"0.78rem",color:"#15803d"}}>
              <span style={{fontSize:"1rem"}}>💬</span>
              <span>Заказ берилгенден кийин <b>WhatsApp'ка</b> билдирүү жиберилет</span>
            </div>
            <button onClick={handleOrder} style={{width:"100%",padding:"13px",background:"linear-gradient(135deg,#25d366,#128c7e)",color:"#fff",border:"none",borderRadius:12,fontWeight:800,fontSize:"0.95rem",cursor:"pointer",boxShadow:"0 4px 14px rgba(37,211,102,0.4)",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
              <span style={{fontSize:"1.1rem"}}>💬</span> Заказ берүү (WhatsApp)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── DETAIL PAGE ──────────────────────────────────────────────────────────────
function DetailPage({product, cart, onAdd, onBack}) {
  const [selSize,setSelSize]=useState(null);
  const [sizeErr,setSizeErr]=useState(false);
  const [selImg, setSelImg] =useState(0);
  const inCart=cart.some(c=>c.id===product.id);
  const sizes=SZ[product.cat]||null;
  const bc=product.badge?BC[product.badge]:null;
  const imgs=EXTRA_IMGS[product.id]||[product.img,product.img,product.img];

  function handleAdd() {
    if(sizes&&!selSize){setSizeErr(true);return;}
    setSizeErr(false); onAdd({...product,size:selSize});
  }

  return (
    <div style={{maxWidth:1060,margin:"0 auto",padding:"22px 24px"}}>
      <button onClick={onBack} style={{display:"inline-flex",alignItems:"center",gap:6,background:"#fffaf8",border:"1.5px solid #f5d5d0",borderRadius:9,padding:"8px 18px",cursor:"pointer",fontWeight:700,fontSize:"0.85rem",color:"#64748b",marginBottom:18,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>← Артка</button>
      <div style={{display:"flex",gap:28,background:"#fffaf8",borderRadius:20,padding:28,boxShadow:"0 4px 32px rgba(0,0,0,0.07)",flexWrap:"wrap",border:"1px solid #fae8e6"}}>
        <div style={{display:"flex",gap:12,flexShrink:0}}>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {imgs.map((src,i)=>(
              <div key={i} onClick={()=>setSelImg(i)} style={{width:70,height:70,borderRadius:10,overflow:"hidden",cursor:"pointer",flexShrink:0,border:selImg===i?"2.5px solid #e74c3c":"2px solid #e2e8f0",transition:"border 0.15s"}}>
                <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
              </div>
            ))}
          </div>
          <div style={{position:"relative",width:300,height:340,borderRadius:16,overflow:"hidden",background:"#fdf6f0",flexShrink:0}}>
            <img src={imgs[selImg]} alt={product.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            {bc&&<div style={{position:"absolute",top:12,left:12,background:bc.bg,color:bc.c,fontSize:"0.75rem",fontWeight:800,padding:"4px 12px",borderRadius:20}}>{product.badge}</div>}
            <div style={{position:"absolute",bottom:10,right:10,background:"rgba(255,255,255,0.88)",borderRadius:9,padding:"5px 10px",display:"flex",alignItems:"center",gap:5,backdropFilter:"blur(6px)",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
              <Logo size={18}/>
              <span style={{fontSize:"0.68rem",fontWeight:800,color:"#c0392b",letterSpacing:"0.06em"}}>VERSEL</span>
            </div>
          </div>
        </div>
        <div style={{flex:1,minWidth:260,display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:10}}>
            <span style={{fontSize:"1.1rem"}}>{ICONS[product.cat]}</span>
            <span style={{fontSize:"0.78rem",color:"#64748b",fontWeight:600}}>{product.cat}</span>
          </div>
          <h1 style={{fontSize:"1.5rem",fontWeight:900,color:"#0f172a",marginBottom:12,lineHeight:1.3}}>{product.title}</h1>
          <div style={{marginBottom:14}}><StockTag n={product.stock}/></div>
          <p style={{color:"#64748b",lineHeight:1.85,fontSize:"0.9rem",marginBottom:20}}>{product.desc}</p>
          {sizes&&(
            <div style={{marginBottom:20}}>
              <div style={{display:"flex",alignItems:"center",gap:8,fontWeight:700,fontSize:"0.88rem",marginBottom:10,color:"#374151"}}>
                Размер тандоо: {sizeErr&&<span style={{color:"#ef4444",fontSize:"0.78rem"}}>⚠ Тандаңыз!</span>}
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {sizes.map(sz=>(
                  <button key={sz} onClick={()=>{setSelSize(sz);setSizeErr(false);}}
                    style={{padding:"8px 16px",border:selSize===sz?"2px solid #e74c3c":"1.5px solid #e2e8f0",borderRadius:9,cursor:"pointer",fontWeight:600,fontSize:"0.83rem",background:selSize===sz?"#fff2f0":"#fff",color:selSize===sz?"#c0392b":"#64748b"}}>
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:14,marginBottom:22,flexWrap:"wrap",marginTop:"auto"}}>
            <div>
              <div style={{fontSize:"0.75rem",color:"#94a3b8",marginBottom:2}}>Баасы</div>
              <div style={{fontSize:"2rem",fontWeight:900,color:"#ef4444"}}>{product.price.toLocaleString()} ₽</div>
            </div>
            <button disabled={product.stock===0} onClick={handleAdd}
              style={{padding:"13px 28px",border:"none",borderRadius:12,fontWeight:800,fontSize:"0.95rem",cursor:product.stock===0?"not-allowed":"pointer",
                background:product.stock===0?"#e2e8f0":inCart?"linear-gradient(135deg,#15803d,#16a34a)":"linear-gradient(135deg,#c0392b,#e74c3c)",
                color:product.stock===0?"#94a3b8":"#fff",boxShadow:product.stock===0?"none":"0 4px 14px rgba(37,99,235,0.35)"}}>
              {product.stock===0?"✕ Жок":inCart?"✓ Корзинада":"Корзинага кош"}
            </button>
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {[["🚚","Жеткирүү","1-3 күн"],["🔒","Гарантия","12 ай"],["↩","Кайтаруу","14 күн"]].map(([icon,t,v])=>(
              <div key={t} style={{display:"flex",alignItems:"center",gap:8,background:"#fdf6f0",borderRadius:10,padding:"10px 13px",flex:1,minWidth:88,border:"1px solid #fae8e6"}}>
                <span style={{fontSize:"1.1rem"}}>{icon}</span>
                <div><div style={{fontWeight:700,fontSize:"0.75rem",color:"#374151"}}>{t}</div><div style={{fontSize:"0.7rem",color:"#94a3b8"}}>{v}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function HomePage({goProducts,goLogin}) {
  return (
    <div>
      <div style={{background:"linear-gradient(135deg,#1a0a08 0%,#3d1410 60%,#2d0d0d 100%)",padding:"56px 24px 60px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-30%",right:"0",width:500,height:500,background:"radial-gradient(circle,rgba(192,57,43,0.15),transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}/>
        <div style={{maxWidth:1060,margin:"0 auto",display:"flex",alignItems:"center",gap:48,flexWrap:"wrap",position:"relative",zIndex:1}}>
          <div style={{flex:1,minWidth:260}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(192,57,43,0.2)",color:"#f1948a",fontWeight:700,fontSize:"0.78rem",padding:"6px 16px",borderRadius:20,marginBottom:18,border:"1px solid rgba(192,57,43,0.3)"}}>🔥 Мегараспродажа жүрүп жатат!</div>
            <h1 style={{fontSize:"clamp(1.9rem,4.5vw,3.1rem)",fontWeight:900,lineHeight:1.15,color:"#fff",margin:"0 0 16px"}}>
              Эң мыкты<br/><span style={{background:"linear-gradient(90deg,#e74c3c,#fadbd8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>товарлар</span><br/>бир жерде
            </h1>
            <p style={{fontSize:"0.95rem",color:"#94a3b8",lineHeight:1.85,margin:"0 0 28px",maxWidth:400}}>Телефондор, кийимдер, оюнчуктар — 100 миңден ашык товар, тез жеткирүү</p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button onClick={goProducts} style={{background:"linear-gradient(135deg,#c0392b,#e74c3c)",color:"#fff",border:"none",borderRadius:12,padding:"13px 28px",fontWeight:700,fontSize:"0.95rem",cursor:"pointer",boxShadow:"0 4px 20px rgba(192,57,43,0.4)"}}>Товарларды көрүү →</button>
              <button onClick={goLogin} style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,200,190,0.3)",borderRadius:12,padding:"13px 22px",fontWeight:700,fontSize:"0.9rem",color:"#fff",cursor:"pointer"}}>Кирүү</button>
            </div>
          </div>
          <div style={{flex:1,minWidth:260,maxWidth:440}}>
            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80" alt="" style={{width:"100%",borderRadius:20,boxShadow:"0 24px 60px rgba(0,0,0,0.4)"}}/>
          </div>
        </div>
      </div>
      <div style={{background:"#fffaf8",borderBottom:"1px solid #f1f5f9"}}>
        <div style={{maxWidth:1060,margin:"0 auto",padding:"20px 24px",display:"flex",flexWrap:"wrap"}}>
          {[["📦","50,000+","Товар"],["😊","200,000+","Кардар"],["⭐","4.9 / 5","Рейтинг"],["🚚","1-3 күн","Жеткирүү"],["🔒","100%","Гарантия"]].map(([icon,val,label],i,arr)=>(
            <div key={label} style={{flex:1,minWidth:100,textAlign:"center",padding:"14px 8px",borderRight:i<arr.length-1?"1px solid #f1f5f9":"none"}}>
              <div style={{fontSize:"1.4rem"}}>{icon}</div><div style={{fontWeight:900,fontSize:"1rem",color:"#c0392b"}}>{val}</div><div style={{fontSize:"0.72rem",color:"#94a3b8"}}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:1060,margin:"0 auto",padding:"36px 24px 48px"}}>
        <h2 style={{fontWeight:900,fontSize:"1.25rem",marginBottom:18,color:"#0f172a"}}>🏪 Категориялар</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(138px,1fr))",gap:12}}>
          {CATS.filter(c=>c!=="Баары").map(cat=>(
            <button key={cat} onClick={goProducts} style={{background:"#fffaf8",border:"1px solid #f5d5d0",borderRadius:16,padding:"20px 12px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:7,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
              <span style={{fontSize:"2.2rem"}}>{ICONS[cat]}</span><span style={{fontWeight:700,fontSize:"0.82rem",color:"#374151"}}>{cat}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <div style={{maxWidth:740,margin:"0 auto",padding:"36px 24px"}}>
      <div style={{background:"#fffaf8",borderRadius:20,boxShadow:"0 4px 24px rgba(0,0,0,0.06)",overflow:"hidden",border:"1px solid #fae8e6"}}>
        <div style={{background:"linear-gradient(135deg,#2d0d0d,#5a1a15)",padding:"38px 40px 30px",textAlign:"center"}}>
          <div style={{display:"flex",justifyContent:"center",marginBottom:14}}><Logo size={52}/></div>
          <h1 style={{fontSize:"1.7rem",fontWeight:900,color:"#fff",marginBottom:6,letterSpacing:"-0.03em"}}>Versel</h1>
          <p style={{color:"#94a3b8",fontSize:"0.88rem"}}>Кыргызстандын эң ишенимдүү онлайн дүкөнү</p>
        </div>
        <div style={{padding:"30px 36px"}}>
          <p style={{color:"#64748b",lineHeight:1.9,marginBottom:26,fontSize:"0.9rem",textAlign:"center"}}>Биз 2018-жылдан бери иштеп келебиз. Оригиналдуу товарлар, тез жеткирүү жана сапаттуу кызмат.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:26}}>
            {[["📦","50K+","Товар"],["😊","200K+","Кардар"],["⭐","4.9","Рейтинг"],["🚚","1-3 күн","Жеткирүү"]].map(([icon,val,label])=>(
              <div key={label} style={{background:"#fff2f0",borderRadius:14,padding:"16px 20px",textAlign:"center",minWidth:96}}>
                <div style={{fontSize:"1.4rem"}}>{icon}</div><div style={{fontWeight:900,fontSize:"1.05rem",color:"#c0392b"}}>{val}</div><div style={{fontSize:"0.72rem",color:"#94a3b8"}}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[["📍 Дарек","Бишкек, Чүй 115"],["📞 Телефон","+996 312 000 000"],["✉️ Email","info@techstore.kg"],["⏰ Иш убактысы","9:00-21:00 күн сайын"]].map(([t,v])=>(
              <div key={t} style={{background:"#fdf6f0",borderRadius:10,padding:14,border:"1px solid #fae8e6"}}>
                <div style={{fontWeight:700,fontSize:"0.8rem",color:"#c0392b",marginBottom:3}}>{t}</div><div style={{fontSize:"0.84rem",color:"#64748b"}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PRODUCTS LIST ────────────────────────────────────────────────────────────
function ProductsList({products,cart,onAdd,onDetail}) {
  const [search,setSearch]=useState("");
  const [cat,setCat]=useState("Баары");
  const [sort,setSort]=useState("default");
  const [maxP,setMaxP]=useState(300000);

  let list=products.filter(p=>{
    if(cat!=="Баары"&&p.cat!==cat)return false;
    if(p.price>maxP)return false;
    if(search&&!p.title.toLowerCase().includes(search.toLowerCase()))return false;
    return true;
  });
  if(sort==="asc") list=[...list].sort((a,b)=>a.price-b.price);
  if(sort==="desc")list=[...list].sort((a,b)=>b.price-a.price);
  if(sort==="name")list=[...list].sort((a,b)=>a.title.localeCompare(b.title));

  return (
    <div style={{maxWidth:1200,margin:"0 auto",padding:"20px 24px"}}>
      <div style={{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,background:"#fffaf8",border:"1.5px solid #f5d5d0",borderRadius:12,padding:"9px 14px",flex:1,maxWidth:420,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <span style={{color:"#94a3b8"}}>🔍</span>
          <input style={{border:"none",outline:"none",fontSize:"0.9rem",width:"100%",background:"transparent"}} placeholder="Товар издөө..." value={search} onChange={e=>setSearch(e.target.value)}/>
          {search&&<button style={{background:"none",border:"none",cursor:"pointer",color:"#cbd5e1"}} onClick={()=>setSearch("")}>✕</button>}
        </div>
        <select style={{border:"1.5px solid #f5d5d0",borderRadius:10,padding:"9px 12px",fontSize:"0.85rem",background:"#fffaf8",outline:"none",cursor:"pointer",color:"#374151"}} value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="default">Иргөө: демейки</option>
          <option value="asc">Баасы: арзандан</option>
          <option value="desc">Баасы: кымбаттан</option>
          <option value="name">Аталышы: А-Я</option>
        </select>
      </div>
      <div style={{display:"flex",gap:18,alignItems:"flex-start"}}>
        <aside style={{width:192,flexShrink:0,background:"#fffaf8",borderRadius:16,padding:14,boxShadow:"0 2px 12px rgba(0,0,0,0.05)",border:"1px solid #fae8e6"}}>
          <div style={{fontWeight:800,fontSize:"0.74rem",textTransform:"uppercase",letterSpacing:"0.07em",color:"#94a3b8",marginBottom:10}}>Категориялар</div>
          {CATS.map(c=>(
            <button key={c} onClick={()=>setCat(c)}
              style={{display:"flex",alignItems:"center",gap:7,width:"100%",textAlign:"left",padding:"8px 10px",background:cat===c?"#fff2f0":"transparent",border:"none",borderLeft:cat===c?"3px solid #c0392b":"3px solid transparent",cursor:"pointer",fontSize:"0.82rem",color:cat===c?"#c0392b":"#64748b",fontWeight:cat===c?700:500,borderRadius:"0 8px 8px 0",marginBottom:2}}>
              {ICONS[c]} {c}
            </button>
          ))}
          <div style={{marginTop:16,paddingTop:14,borderTop:"1px solid #f1f5f9"}}>
            <div style={{fontWeight:800,fontSize:"0.74rem",textTransform:"uppercase",letterSpacing:"0.07em",color:"#94a3b8",marginBottom:8}}>Баасы</div>
            <div style={{fontSize:"0.78rem",color:"#64748b",fontWeight:600,marginBottom:6}}>{maxP.toLocaleString()} ₽ чейин</div>
            <input type="range" min={0} max={300000} step={1000} value={maxP} style={{width:"100%",accentColor:"#e74c3c"}} onChange={e=>setMaxP(+e.target.value)}/>
          </div>
          <div style={{marginTop:14,background:"linear-gradient(135deg,#fef2f2,#fff2f0)",borderRadius:10,padding:12,textAlign:"center",border:"1px solid #fee2e2"}}>
            <div style={{fontSize:"1.2rem"}}>🔥</div>
            <div style={{fontWeight:800,fontSize:"0.78rem",color:"#ef4444"}}>Акция!</div>
            <div style={{fontSize:"0.7rem",color:"#94a3b8",marginTop:2}}>Бардыгына 5% скидка</div>
          </div>
        </aside>
        <div style={{flex:1,minWidth:0}}>
          <div style={{marginBottom:12,fontSize:"0.83rem",color:"#94a3b8"}}>Табылды: <b style={{color:"#c0392b"}}>{list.length}</b> товар</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(168px,1fr))",gap:14}}>
            {list.length===0&&(<div style={{gridColumn:"1/-1",textAlign:"center",padding:"50px 0",color:"#cbd5e1"}}><div style={{fontSize:"2.5rem"}}>🔍</div><div style={{marginTop:10,fontWeight:600}}>Эч нерсе табылган жок</div></div>)}
            {list.map(p=>{
              const inCart=cart.some(c=>c.id===p.id);
              const bc=p.badge?BC[p.badge]:null;
              return (
                <div key={p.id} onClick={()=>onDetail(p.id)} style={{background:"#fffaf8",borderRadius:14,boxShadow:"0 2px 10px rgba(0,0,0,0.05)",overflow:"hidden",cursor:"pointer",border:"1px solid #fae8e6"}}>
                  <div style={{position:"relative"}}>
                    <img src={p.img} alt="" style={{width:"100%",height:145,objectFit:"cover",display:"block"}}/>
                    {/* Versel логотип — сүрөттүн астында */}
                    <div style={{position:"absolute",bottom:6,right:6,background:"rgba(255,255,255,0.85)",borderRadius:7,padding:"3px 8px",display:"flex",alignItems:"center",gap:4,backdropFilter:"blur(4px)"}}>
                      <Logo size={13}/>
                      <span style={{fontSize:"0.58rem",fontWeight:800,color:"#c0392b",letterSpacing:"0.06em"}}>VERSEL</span>
                    </div>
                    {bc&&<div style={{position:"absolute",top:8,left:8,background:bc.bg,color:bc.c,fontSize:"0.62rem",fontWeight:800,padding:"2px 8px",borderRadius:20}}>{p.badge}</div>}
                    {inCart&&<div style={{position:"absolute",top:8,right:8,background:"#16a34a",color:"#fff",fontSize:"0.62rem",fontWeight:700,padding:"2px 7px",borderRadius:20}}>✓</div>}
                  </div>
                  <div style={{padding:11}}>
                    <div style={{fontSize:"0.62rem",fontWeight:700,color:"#e74c3c",background:"#fff2f0",padding:"2px 7px",borderRadius:20,display:"inline-block",marginBottom:6}}>{ICONS[p.cat]} {p.cat}</div>
                    <div style={{fontSize:"0.83rem",fontWeight:800,marginBottom:4,color:"#0f172a",lineHeight:1.3}}>{p.title}</div>
                    <div style={{fontSize:"0.7rem",color:"#94a3b8",marginBottom:8,lineHeight:1.4}}>{p.desc.slice(0,48)}...</div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8,gap:4,flexWrap:"wrap"}}>
                      <span style={{fontWeight:900,color:"#ef4444",fontSize:"0.95rem"}}>{p.price.toLocaleString()} ₽</span>
                      <StockTag n={p.stock} sm/>
                    </div>
                    <button disabled={p.stock===0} onClick={e=>{e.stopPropagation();if(p.stock>0)onAdd(p);}}
                      style={{width:"100%",padding:"8px",border:"none",borderRadius:8,fontWeight:700,cursor:p.stock===0?"not-allowed":"pointer",fontSize:"0.78rem",
                        background:p.stock===0?"#f1f5f9":inCart?"linear-gradient(135deg,#15803d,#16a34a)":"linear-gradient(135deg,#c0392b,#e74c3c)",
                        color:p.stock===0?"#94a3b8":"#fff"}}>
                      {p.stock===0?"✕ Жок":inCart?"✓ Корзинада":"+ Корзинага"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────
export default function App() {
  const [page,     setPage]     = useState("home");
  const [products, setProducts] = useState(DATA);
  const [cart,     setCart]     = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);

  // sessionStorage'да сакталат — Local Storage'да КӨРҮНБӨЙТ, пароль жок
  const [user, setUser] = useState(() => {
    try {
      const s = sessionStorage.getItem("vs");
      return s ? _d(s) : null;
    } catch { return null; }
  });

  useEffect(() => {
    // Барак ачылганда theme жаз (башка эч нерсе жок)
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "system");
    }
    // Эски user/vrs_session ачкычтарын тазала
    localStorage.removeItem("user");
    localStorage.removeItem("vrs_session");
  }, []);

  function handleLogin(userData) {
    setUser(userData);
    try { sessionStorage.setItem("vs", _e(userData)); } catch {}
  }

  function logout() {
    setUser(null);
    setMenuOpen(false);
    try { sessionStorage.removeItem("vs"); } catch {}
  }

  function addToCart(product) {
    const prod = products.find(p=>p.id===product.id);
    if(!prod||prod.stock===0)return;
    setProducts(prev=>prev.map(p=>p.id===product.id?{...p,stock:p.stock-1}:p));
    setCart(prev=>{
      const ex=prev.find(i=>i.id===product.id);
      if(ex)return prev.map(i=>i.id===product.id?{...i,qty:i.qty+1}:i);
      return [...prev,{...product,qty:1}];
    });
  }

  function removeFromCart(id) {
    const item=cart.find(i=>i.id===id);
    if(item)setProducts(prev=>prev.map(p=>p.id===id?{...p,stock:p.stock+item.qty}:p));
    setCart(prev=>prev.filter(i=>i.id!==id));
  }

  function changeQty(id,delta) {
    const item=cart.find(i=>i.id===id);
    const prod=products.find(p=>p.id===id);
    if(!item)return;
    if(delta>0&&prod.stock===0)return;
    if(delta<0&&item.qty===1)return;
    setProducts(prev=>prev.map(p=>p.id===id?{...p,stock:p.stock-delta}:p));
    setCart(prev=>prev.map(i=>i.id===id?{...i,qty:i.qty+delta}:i));
  }

  function goTo(pg){setPage(pg);setDetailId(null);setMenuOpen(false);}

  const totalQty=cart.reduce((s,i)=>s+i.qty,0);
  const detailProd=products.find(p=>p.id===detailId);

  return (
    <div style={{fontFamily:"'Segoe UI',system-ui,sans-serif",background:"#fdf6f0",minHeight:"100vh"}}>
      <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",height:62,background:"#fffaf8",borderBottom:"1px solid #f5d5d0",position:"sticky",top:0,zIndex:50,gap:10}}>
        {/* ✅ VERSEL ЛОГОТИП */}
        <div onClick={()=>goTo("home")} style={{fontWeight:800,fontSize:"1.2rem",color:"#0f172a",cursor:"pointer",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:9,letterSpacing:"-0.03em"}}>
          <Logo size={32}/>
          <span style={{background:"linear-gradient(135deg,#8b1a1a,#c0392b)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Versel</span>
        </div>
        <nav style={{display:"flex",gap:2}}>
          {[["home","🏠 Home"],["products","🛍 Products"],["about","ℹ️ About"]].map(([k,l])=>(
            <button key={k} onClick={()=>goTo(k)} style={{background:page===k?"#fff0ee":"transparent",border:"none",padding:"8px 13px",borderRadius:8,cursor:"pointer",fontWeight:600,fontSize:"0.85rem",color:page===k?"#c0392b":"#64748b",whiteSpace:"nowrap"}}>{l}</button>
          ))}
        </nav>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={()=>setCartOpen(true)} style={{position:"relative",background:"#fff2f0",border:"1.5px solid #fadbd8",borderRadius:10,padding:"8px 14px",cursor:"pointer",fontSize:"1.1rem",display:"flex",alignItems:"center"}}>
            🛒
            {totalQty>0&&<span style={{position:"absolute",top:-6,right:-6,background:"#ef4444",color:"#fff",borderRadius:"50%",width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.62rem",fontWeight:900}}>{totalQty}</span>}
          </button>
          {user?(
            <div style={{position:"relative"}}>
              <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#fff2f0",border:"1.5px solid #fadbd8",borderRadius:9,padding:"8px 13px",cursor:"pointer",fontWeight:700,fontSize:"0.82rem",color:"#c0392b",display:"flex",alignItems:"center",gap:7}}>
                {user.avatar
                  ? <img src={user.avatar} alt="" style={{width:22,height:22,borderRadius:"50%",objectFit:"cover"}}/>
                  : <span>👤</span>}
                {user.name} ▾
              </button>
              {menuOpen&&(
                <div style={{position:"absolute",top:"calc(100% + 6px)",right:0,background:"#fffaf8",borderRadius:12,boxShadow:"0 8px 24px rgba(0,0,0,0.1)",border:"1px solid #f5d5d0",minWidth:200,zIndex:60,overflow:"hidden"}}>
                  <div style={{padding:"12px 14px",borderBottom:"1px solid #f1f5f9",display:"flex",alignItems:"center",gap:10}}>
                    {user.avatar
                      ? <img src={user.avatar} alt="" style={{width:36,height:36,borderRadius:"50%",objectFit:"cover",flexShrink:0}}/>
                      : <div style={{width:36,height:36,borderRadius:"50%",background:"#fff2f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",flexShrink:0}}>👤</div>}
                    <div>
                      <div style={{fontWeight:700,fontSize:"0.85rem",color:"#0f172a"}}>{user.name}</div>
                      <div style={{fontSize:"0.72rem",color:"#94a3b8"}}>{user.email}</div>
                    </div>
                  </div>
                  {user.phone&&<div style={{padding:"8px 14px",fontSize:"0.78rem",color:"#64748b",borderBottom:"1px solid #f1f5f9"}}>📞 {user.phone}</div>}
                  <button style={{display:"block",width:"100%",textAlign:"left",padding:"10px 14px",background:"none",border:"none",cursor:"pointer",fontSize:"0.85rem",fontWeight:600,color:"#374151"}} onClick={()=>goTo("about")}>ℹ️ Жөнүндө</button>
                  <button style={{display:"block",width:"100%",textAlign:"left",padding:"10px 14px",background:"none",border:"none",cursor:"pointer",fontSize:"0.85rem",fontWeight:600,color:"#ef4444"}} onClick={logout}>🚪 Чыгуу</button>
                </div>
              )}
            </div>
          ):(
            <>
              <button onClick={()=>setAuthMode("login")} style={{background:"transparent",border:"1.5px solid #c0392b",borderRadius:8,padding:"7px 13px",cursor:"pointer",fontWeight:700,fontSize:"0.82rem",color:"#c0392b",whiteSpace:"nowrap"}}>→ Кирүү</button>
              <button onClick={()=>setAuthMode("signup")} style={{background:"linear-gradient(135deg,#c0392b,#e74c3c)",color:"#fff",border:"none",borderRadius:9,padding:"8px 15px",cursor:"pointer",fontWeight:700,fontSize:"0.82rem",whiteSpace:"nowrap"}}>+ Катталуу</button>
            </>
          )}
        </div>
      </header>

      {page==="home"     && <HomePage goProducts={()=>goTo("products")} goLogin={()=>setAuthMode("login")}/>}
      {page==="products" && !detailId && <ProductsList products={products} cart={cart} onAdd={addToCart} onDetail={setDetailId}/>}
      {page==="products" && detailId && detailProd && <DetailPage product={detailProd} cart={cart} onAdd={addToCart} onBack={()=>setDetailId(null)}/>}
      {page==="about"    && <AboutPage/>}

      {cartOpen&&<CartModal cart={cart} user={user} onClose={()=>setCartOpen(false)} onRemove={removeFromCart} onQty={changeQty} onOrder={()=>setCart([])}/>}
      {authMode&&<AuthModal mode={authMode} onClose={()=>setAuthMode(null)} onLogin={handleLogin}/>}
    </div>
  );
}
