import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { Loader, OrdersList } from '../';

import { formatOrderNumber } from '../../utils/functions';

import { useAppSelector } from '../../services/hooks';

import type { IDraggableIngredient } from '../../utils/types';

import { nMaxOrdersInDoneColumn,
         nMaxOrdersInPendingColumn } from '../../utils/constants';

import styles from './feed.module.css';

const oData = {
    "success": true,
    "orders": [{
        "_id": "61d5a6eb6d7cd8001b2cf9a4",
        "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd"],
        "status": "cancelled",
        "name": "Space флюоресцентный бургер",
        "createdAt": "2022-01-05T14:10:51.261Z",
        "updatedAt": "2022-01-05T14:10:51.426Z",
        "number": 7627
    }, {
        "_id": "61d5a64c6d7cd8001b2cf9a1",
        "ingredients": ["60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Био-марсианский фалленианский флюоресцентный метеоритный бургер",
        "createdAt": "2022-01-05T14:08:12.895Z",
        "updatedAt": "2022-01-05T14:08:13.138Z",
        "number": 7626
    }, {
        "_id": "61d5a5aa6d7cd8001b2cf9a0",
        "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd"],
        "status": "cancelled",
        "name": "Space флюоресцентный бургер",
        "createdAt": "2022-01-05T14:05:30.832Z",
        "updatedAt": "2022-01-05T14:05:30.988Z",
        "number": 7625
    }, {
        "_id": "61d5a31d6d7cd8001b2cf99e",
        "ingredients": ["60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бургер",
        "createdAt": "2022-01-05T13:54:37.140Z",
        "updatedAt": "2022-01-05T13:54:37.332Z",
        "number": 7624
    }, {
        "_id": "61d5a0a36d7cd8001b2cf99b",
        "ingredients": ["60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Традиционный-галактический экзо-плантаго бессмертный флюоресцентный бургер",
        "createdAt": "2022-01-05T13:44:03.132Z",
        "updatedAt": "2022-01-05T13:44:03.349Z",
        "number": 7623
    }, {
        "_id": "61d59f346d7cd8001b2cf998",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Space spicy экзо-плантаго био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-05T13:37:56.603Z",
        "updatedAt": "2022-01-05T13:37:56.772Z",
        "number": 7622
    }, {
        "_id": "61d59ebd6d7cd8001b2cf997",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный метеоритный spicy астероидный экзо-плантаго био-марсианский бургер",
        "createdAt": "2022-01-05T13:35:57.084Z",
        "updatedAt": "2022-01-05T13:35:57.252Z",
        "number": 7621
    }, {
        "_id": "61d598ea6d7cd8001b2cf992",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Бессмертный люминесцентный метеоритный альфа-сахаридный антарианский традиционный-галактический space spicy минеральный астероидный фалленианский экзо-плантаго био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-05T13:11:06.007Z",
        "updatedAt": "2022-01-05T13:11:06.197Z",
        "number": 7620
    }, {
        "_id": "61d598356d7cd8001b2cf991",
        "ingredients": ["60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Флюоресцентный бургер",
        "createdAt": "2022-01-05T13:08:05.503Z",
        "updatedAt": "2022-01-05T13:08:05.658Z",
        "number": 7619
    }, {
        "_id": "61d597766d7cd8001b2cf98e",
        "ingredients": ["60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Антарианский флюоресцентный люминесцентный бургер",
        "createdAt": "2022-01-05T13:04:54.695Z",
        "updatedAt": "2022-01-05T13:04:54.876Z",
        "number": 7618
    }, {
        "_id": "61d5909c6d7cd8001b2cf981",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бессмертный space астероидный экзо-плантаго бургер",
        "createdAt": "2022-01-05T12:35:40.256Z",
        "updatedAt": "2022-01-05T12:35:40.426Z",
        "number": 7617
    }, {
        "_id": "61d58fc96d7cd8001b2cf980",
        "ingredients": ["60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бургер",
        "createdAt": "2022-01-05T12:32:09.586Z",
        "updatedAt": "2022-01-05T12:32:09.749Z",
        "number": 7616
    }, {
        "_id": "61d58d556d7cd8001b2cf972",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Space бессмертный флюоресцентный бургер",
        "createdAt": "2022-01-05T12:21:41.784Z",
        "updatedAt": "2022-01-05T12:21:41.934Z",
        "number": 7615
    }, {
        "_id": "61d58d0a6d7cd8001b2cf970",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бессмертный люминесцентный метеоритный альфа-сахаридный антарианский традиционный-галактический space spicy минеральный астероидный фалленианский экзо-плантаго био-марсианский бургер",
        "createdAt": "2022-01-05T12:20:26.550Z",
        "updatedAt": "2022-01-05T12:20:26.740Z",
        "number": 7614
    }, {
        "_id": "61d58d046d7cd8001b2cf96f",
        "ingredients": ["60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Бессмертный люминесцентный метеоритный альфа-сахаридный антарианский традиционный-галактический space spicy минеральный астероидный фалленианский экзо-плантаго био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-05T12:20:20.776Z",
        "updatedAt": "2022-01-05T12:20:20.943Z",
        "number": 7613
    }, {
        "_id": "61d573f86d7cd8001b2cf954",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бессмертный люминесцентный метеоритный альфа-сахаридный антарианский традиционный-галактический space spicy минеральный астероидный фалленианский экзо-плантаго био-марсианский бургер",
        "createdAt": "2022-01-05T10:33:28.934Z",
        "updatedAt": "2022-01-05T10:33:29.132Z",
        "number": 7612
    }, {
        "_id": "61d56e916d7cd8001b2cf952",
        "ingredients": ["60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бургер",
        "createdAt": "2022-01-05T10:10:25.168Z",
        "updatedAt": "2022-01-05T10:10:25.287Z",
        "number": 7611
    }, {
        "_id": "61d56e336d7cd8001b2cf951",
        "ingredients": ["60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Флюоресцентный бургер",
        "createdAt": "2022-01-05T10:08:51.744Z",
        "updatedAt": "2022-01-05T10:08:51.919Z",
        "number": 7610
    }, {
        "_id": "61d56de76d7cd8001b2cf950",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бессмертный люминесцентный метеоритный альфа-сахаридный антарианский традиционный-галактический space spicy минеральный астероидный фалленианский экзо-плантаго био-марсианский бургер",
        "createdAt": "2022-01-05T10:07:35.004Z",
        "updatedAt": "2022-01-05T10:07:35.158Z",
        "number": 7609
    }, {
        "_id": "61d53e406d7cd8001b2cf943",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Space минеральный экзо-плантаго био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-05T06:44:16.118Z",
        "updatedAt": "2022-01-05T06:44:16.302Z",
        "number": 7608
    }, {
        "_id": "61d538156d7cd8001b2cf93e",
        "ingredients": ["60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Флюоресцентный бургер",
        "createdAt": "2022-01-05T06:17:57.772Z",
        "updatedAt": "2022-01-05T06:17:57.937Z",
        "number": 7607
    }, {
        "_id": "61d537fe6d7cd8001b2cf93d",
        "ingredients": ["60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Флюоресцентный бургер",
        "createdAt": "2022-01-05T06:17:34.363Z",
        "updatedAt": "2022-01-05T06:17:34.527Z",
        "number": 7606
    }, {
        "_id": "61d536056d7cd8001b2cf939",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бессмертный люминесцентный метеоритный альфа-сахаридный антарианский традиционный-галактический space spicy минеральный астероидный фалленианский экзо-плантаго био-марсианский бургер",
        "createdAt": "2022-01-05T06:09:09.386Z",
        "updatedAt": "2022-01-05T06:09:09.565Z",
        "number": 7605
    }, {
        "_id": "61d4e4df6d7cd8001b2cf935",
        "ingredients": ["60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бургер",
        "createdAt": "2022-01-05T00:22:55.923Z",
        "updatedAt": "2022-01-05T00:22:56.126Z",
        "number": 7604
    }, {
        "_id": "61d4e3d96d7cd8001b2cf934",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный люминесцентный space астероидный экзо-плантаго бургер",
        "createdAt": "2022-01-05T00:18:33.579Z",
        "updatedAt": "2022-01-05T00:18:33.753Z",
        "number": 7603
    }, {
        "_id": "61d4c8ef6d7cd8001b2cf92a",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Space флюоресцентный люминесцентный бургер",
        "createdAt": "2022-01-04T16:23:43.247Z",
        "updatedAt": "2022-01-04T22:23:43.408Z",
        "number": 7602
    }, {
        "_id": "61d4c8726d7cd8001b2cf929",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Spicy флюоресцентный метеоритный бургер",
        "createdAt": "2022-01-04T22:21:38.305Z",
        "updatedAt": "2022-01-04T22:21:38.447Z",
        "number": 7601
    }, {
        "_id": "61d4b7316d7cd8001b2cf923",
        "ingredients": ["60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный альфа-сахаридный бургер",
        "createdAt": "2022-01-04T21:08:01.470Z",
        "updatedAt": "2022-01-04T21:08:01.636Z",
        "number": 7600
    }, {
        "_id": "61d4b6c66d7cd8001b2cf922",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Spicy краторный люминесцентный бургер",
        "createdAt": "2022-01-04T21:06:14.199Z",
        "updatedAt": "2022-01-04T21:06:14.363Z",
        "number": 7599
    }, {
        "_id": "61d4b55d6d7cd8001b2cf921",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Space био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-04T21:00:13.688Z",
        "updatedAt": "2022-01-04T21:00:13.858Z",
        "number": 7598
    }, {
        "_id": "61d4a7c26d7cd8001b2cf91b",
        "ingredients": ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733cd"],
        "status": "pending",
        "name": "Space краторный бургер",
        "createdAt": "2022-01-04T20:02:10.754Z",
        "updatedAt": "2022-01-04T20:02:11.140Z",
        "number": 7597
    }, {
        "_id": "61d4a4c96d7cd8001b2cf918",
        "ingredients": ["60d3b41abdacab0026a733c6"],
        "status": "cancelled",
        "name": "Краторный бургер",
        "createdAt": "2022-01-04T19:49:29.937Z",
        "updatedAt": "2022-01-04T19:49:30.121Z",
        "number": 7596
    }, {
        "_id": "61d4a39f6d7cd8001b2cf916",
        "ingredients": ["60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Бессмертный минеральный фалленианский экзо-плантаго флюоресцентный бургер",
        "createdAt": "2022-01-04T19:44:31.732Z",
        "updatedAt": "2022-01-04T19:44:31.940Z",
        "number": 7595
    }, {
        "_id": "61d4a0dc6d7cd8001b2cf910",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733c7"],
        "status": "pending",
        "name": "Space био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-04T19:32:44.235Z",
        "updatedAt": "2022-01-04T19:32:44.412Z",
        "number": 7594
    }, {
        "_id": "61d4a0896d7cd8001b2cf90f",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733c7"],
        "status": "cancelled",
        "name": "Space био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-03T19:31:21.209Z",
        "updatedAt": "2022-01-03T19:31:21.365Z",
        "number": 7593
    }, {
        "_id": "61d4a0006d7cd8001b2cf90d",
        "ingredients": ["60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c7"],
        "status": "pending",
        "name": "Люминесцентный метеоритный альфа-сахаридный space spicy астероидный экзо-плантаго флюоресцентный бургер",
        "createdAt": "2022-01-02T19:29:04.320Z",
        "updatedAt": "2022-01-02T19:29:04.484Z",
        "number": Number.MAX_SAFE_INTEGER
    }, {
        "_id": "61d49b386d7cd8001b2cf908",
        "ingredients": ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd"],
        "status": "done",
        "name": "Space флюоресцентный бургер",
        "createdAt": "2022-01-01T19:08:40.297Z",
        "updatedAt": "2022-01-01T19:08:40.464Z",
        "number": 7591
    }, {
        "_id": "61d497c16d7cd8001b2cf904",
        "ingredients": ["60d3b41abdacab0026a733c6"],
        "status": "done",
        "name": "Краторный бургер",
        "createdAt": "2021-12-31T18:53:53.226Z",
        "updatedAt": "2021-12-31T18:53:53.415Z",
        "number": 7590
    }, {
        "_id": "61d486476d7cd8001b2cf8fc",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733c7"],
        "status": "pending",
        "name": "Space флюоресцентный люминесцентный бургер",
        "createdAt": "2021-12-31T17:39:19.187Z",
        "updatedAt": "2021-01-04T17:39:19.338Z",
        "number": 7589
    }, {
        "_id": "61d4857d6d7cd8001b2cf8fa",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733c7"],
        "status": "pending",
        "name": "Spicy флюоресцентный метеоритный бургер",
        "createdAt": "2021-12-29T03:35:57.844Z",
        "updatedAt": "2022-01-04T17:35:57.989Z",
        "number": Number.MAX_SAFE_INTEGER
    }, {
        "_id": "61d483026d7cd8001b2cf8f6",
        "ingredients": ["60d3b41abdacab0026a733d2", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c6"],
        "status": "done",
        "name": "Краторный альфа-сахаридный антарианский бургер",
        "createdAt": "2022-01-04T17:25:22.965Z",
        "updatedAt": "2022-01-04T17:25:23.138Z",
        "number": 7587
    }, {
        "_id": "61d482426d7cd8001b2cf8f5",
        "ingredients": ["60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733c6"],
        "status": "done",
        "name": "Краторный метеоритный антарианский минеральный фалленианский бургер",
        "createdAt": "2022-01-04T17:22:10.089Z",
        "updatedAt": "2022-01-04T17:22:10.245Z",
        "number": 7586
    }, {
        "_id": "61d47fff6d7cd8001b2cf8f3",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733c7"],
        "status": "done",
        "name": "Space био-марсианский флюоресцентный бургер",
        "createdAt": "2022-01-04T17:12:31.088Z",
        "updatedAt": "2022-01-04T17:12:31.215Z",
        "number": 7585
    }, {
        "_id": "61d47f256d7cd8001b2cf8f2",
        "ingredients": ["60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733c6"],
        "status": "pending",
        "name": "Краторный бессмертный бургер",
        "createdAt": "2022-01-04T17:08:53.794Z",
        "updatedAt": "2022-01-04T17:08:53.928Z",
        "number": 7584
    }, {
        "_id": "61d47e5b6d7cd8001b2cf8eb",
        "ingredients": ["60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c6"],
        "status": "done",
        "name": "Краторный антарианский бургер",
        "createdAt": "2022-01-04T17:05:31.783Z",
        "updatedAt": "2022-01-04T17:05:31.924Z",
        "number": 7583
    }, {
        "_id": "61d47d816d7cd8001b2cf8e4",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c6"],
        "status": "pending",
        "name": "Краторный метеоритный антарианский традиционный-галактический spicy астероидный экзо-плантаго био-марсианский бургер",
        "createdAt": "2022-01-04T17:01:53.339Z",
        "updatedAt": "2022-01-04T17:01:53.525Z",
        "number": 7582
    }, {
        "_id": "61d47d6c6d7cd8001b2cf8e2",
        "ingredients": ["60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c7"],
        "status": "done",
        "name": "Традиционный-галактический астероидный флюоресцентный люминесцентный бургер",
        "createdAt": "2022-01-04T17:01:32.254Z",
        "updatedAt": "2022-01-04T17:01:32.403Z",
        "number": 7581
    }, {
        "_id": "61d47c2c6d7cd8001b2cf8e1",
        "ingredients": ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733c9", "60d3b41abdacab0026a733cb", "60d3b41abdacab0026a733d4", "60d3b41abdacab0026a733c6"],
        "status": "done",
        "name": "Краторный бессмертный антарианский space астероидный био-марсианский бургер",
        "createdAt": "2022-01-04T16:56:12.788Z",
        "updatedAt": "2022-01-04T16:56:12.906Z",
        "number": 7580
    }, {
        "_id": "61d47a156d7cd8001b2cf8d5",
        "ingredients": ["60d3b41abdacab0026a733cc", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733ca", "60d3b41abdacab0026a733d0", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733c6"],
        "status": "pending",
        "name": "Краторный метеоритный антарианский традиционный-галактический space spicy минеральный экзо-плантаго бургер",
        "createdAt": "2022-01-04T16:47:17.199Z",
        "updatedAt": "2022-01-04T16:47:17.323Z",
        "number": 7579
    }, {
        "_id": "61d477bf6d7cd8001b2cf8cb",
        "ingredients": ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733ce", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733cf"],
        "status": "pending",
        "name": "Традиционный-галактический space краторный антарианский бургер",
        "createdAt": "2022-01-04T16:37:19.681Z",
        "updatedAt": "2022-01-04T16:37:19.801Z",
        "number": 7578
    }],
    "total": 7540,
    "totalToday": 58
} as const;

const getDeclinationString = (nNumber : number, sOne : string, sTwoToFour : string, sFive : string) : string => {
    const nRemainder = nNumber % 10;
    let sResult = "";
    switch(true){
        case (nRemainder === 1 && nNumber !== 11): {
            sResult = sOne;
            break;
        }
        case (nRemainder > 1 && nRemainder < 5 && !(nNumber > 10 && nNumber < 15)): {
            sResult = sTwoToFour;
            break;
        }
        default: 
            sResult = sFive;
    }
    return String(nNumber) + " " + sResult;
};

const makeCoolDateFromUTCString : (sSource : string) => string = (sSource) => {
    const nMaximumDays = 7;
    const dtDate = new Date(sSource);
    const dtDateInDays = new Date(dtDate.getFullYear(), dtDate.getMonth(), dtDate.getDate())
    const dtNow = new Date();
    const dtNowInDays = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate())
    //1 day = 24 hours = 1440 minutes = 86400 seconds = 86400000 milliseconds
    const nDayDifference = Math.floor((dtNowInDays.getTime() - dtDateInDays.getTime()) / 86400000);
    const aDays = ["Сегодня", "Вчера"];
    let sResult = "";
    if(nDayDifference >= 0 && nDayDifference <= nMaximumDays) {
        if(nDayDifference < aDays.length){
            sResult = aDays[nDayDifference];
        }
        else {
            sResult = getDeclinationString(nDayDifference, "день", "дня", "дней") + " назад";
        }
    }
    else{
        sResult = dtDate.toLocaleDateString();
    }
    let nTZDifference = - dtNow.getTimezoneOffset();

    let sTZDifference : string = nTZDifference === 0 ? "" : nTZDifference > 0 ? "+" : "-";
    //there are time zones with NON-ROUND number of hours!
    nTZDifference = Math.abs(nTZDifference);
    if(nTZDifference % 60 === 0){
        sTZDifference = sTZDifference + String(nTZDifference / 60);
    }
    else{
        sTZDifference = sTZDifference + String(Math.floor(nTZDifference / 60)) + ":" + String(Math.floor(nTZDifference % 60));
    }
    
    sResult = sResult + ", " + dtDate.toLocaleTimeString() + " i-GMT" + sTZDifference;
    return sResult;
};

const Feed = () : JSX.Element => {
   
    //boolean, ok
    const bIsBusy = useAppSelector(store => store.app.bIsBusy);
   
    //boolean, ok
    const bLoadedIngredients =
             useAppSelector(store => store.burgerIngredients.bLoadedSuccessful);

    const aIngredients = useAppSelector(store => store.burgerIngredients.aIngredients);
    
    type TPricesAndImages = {
        price?: number;
        image: string;
        type?: string;
        name?: string;
    };
    
    const findIngredientData = (function() {
        let oResults : { [sID: string] : TPricesAndImages } = {}; 
        return function(sID : string){
            if(!(oResults[sID])){
                let oIngredient : IDraggableIngredient | null  = null;
                for (let nTypesCounter = 0; nTypesCounter < aIngredients.length && !(oIngredient); nTypesCounter++){
                    for(let nCounter = 0; nCounter < aIngredients[nTypesCounter].aSet.length && (!(oIngredient)); nCounter++){
                        if(aIngredients[nTypesCounter].aSet[nCounter]._id === sID){
                            oIngredient = aIngredients[nTypesCounter].aSet[nCounter];
                        }
                    }
                }
                console.log(oIngredient);
                if(oIngredient !== null){
                    oResults[sID] = {
                        image : oIngredient.image,
                        name : oIngredient.name,
                        type : oIngredient.type,
                        price: oIngredient.price
                    }
                }
            }
            return oResults[sID];
        }
    })();
   
    const prepareOrderList = (aOrders : Array<{nNumber : number, nTimeUpdated : number}>, nMaxOrdersPerColumn : number, nMaxOrders : number) : Array<Array<number>> => {

        const aResult: number[][] = [];
        for (let nCounter = 0,
                 nCurrentColumn = 0,
                 nItemsInColumn = 0;
             nCounter < nMaxOrders && nCounter < aOrders.length;
             nCounter++){
             if(!aResult[nCurrentColumn]){aResult[nCurrentColumn] = []}
             aResult[nCurrentColumn][nItemsInColumn] = aOrders[nCounter].nNumber;
             nItemsInColumn++;
             if(nItemsInColumn === nMaxOrdersPerColumn){
             nItemsInColumn = 0;
             nCurrentColumn++;
            }
        }
        return aResult;
    }; 
    
    const processOrders = (aOrders : typeof oData.orders)  => {
        const aReadyOrders : Array<{nNumber : number, nTimeUpdated : number}> = [];
        const aPendingOrders : Array<{nNumber : number, nTimeUpdated : number}> = [];
        const aSortedOrders = [...aOrders];
        aSortedOrders.sort((a, b) => {
           const aDate = new Date(a.createdAt);
           const bDate = new Date(b.createdAt);
           return bDate.getTime() - aDate.getTime(); 
        });
        if(bLoadedIngredients){
        const aOrders = aSortedOrders.map(oOrder => {
            let nPrice = 0;
            if(oOrder.status === "done"){
                aReadyOrders.push({nNumber : oOrder.number,
                                   nTimeUpdated: (new Date(oOrder.updatedAt)).getTime()});
            }
            if(oOrder.status === "pending"){
                aPendingOrders.push({nNumber : oOrder.number,
                                   nTimeUpdated: (new Date(oOrder.updatedAt)).getTime()});
            }
            let oBun : TPricesAndImages | undefined = undefined;
            const aIngredients : Array<TPricesAndImages> = oOrder.ingredients.map(sID => {
                const oIngredient = findIngredientData(sID);
                if (oIngredient?.type === 'bun') {
                    oBun = oIngredient;
                }
                console.log(oIngredient);
                if(oIngredient.price !== undefined){
                nPrice = nPrice + (oIngredient?.type === "bun" ? oIngredient.price * 2 : oIngredient.price);
                }
                return findIngredientData(sID);

            });
            aIngredients.reverse();
            return {...oOrder,
                    ingredients : oBun ? [...aIngredients.filter(oI => oI.type !== 'bun'), oBun] : aIngredients,
                     price : nPrice }
                 
            });
            
            return {aOrders: aOrders, 
                    aReadyOrders : prepareOrderList(aReadyOrders.sort((a, b) => b.nTimeUpdated - a.nTimeUpdated), 5, 10),
                    aPendingOrders : prepareOrderList(aPendingOrders.sort((a, b) => b.nTimeUpdated - a.nTimeUpdated), 5, 10),
                   }
            }
            else
             return null;
    }

    const oProcessedData = processOrders(oData.orders);
    const aOrders = oProcessedData !== null ? oProcessedData.aOrders : [];
    const aReadyOrders = oProcessedData !== null ? oProcessedData.aReadyOrders : [];
    const aPendingOrders = oProcessedData !== null ? oProcessedData.aPendingOrders : [];
    
    const nTotal = oData.total;
    const nTotalToday = oData.totalToday;
    
    const nMaxIngredientsToShow = 6;
    
    return (
         <section className={`${styles.section}`}>
             <h1 className={`${styles.header} pt-10 pb-5 text text_type_main-large`}>
                 Лента заказов
             </h1>
             {
                 (bIsBusy || (!bLoadedIngredients)) ? (
                     <Loader message="Загрузка данных&hellip;" />
                ) : (
                     <>
                         <section
                         className={`${styles.pane} ${styles.pane_scrollable}`}>
                             <ul className={styles.orders__list}>
                         {
                            aOrders.map((oOrder, nIndex) => 
                                (
                                    <li key={oOrder._id}
                                        className={`${styles.order} mr-2 pl-6 pt-6 pr-6 pb-6` + (nIndex > 0 ? " mt-4" : "") }>
                                       <div className={`${styles.order__top} mb-6`}>
                                           <div className="text text_type_digits-default">
                                               #{formatOrderNumber(oOrder.number)}
                                           </div>
                                           <div className="text text_type_main-default text_color_inactive">
                                               {makeCoolDateFromUTCString(oOrder.createdAt)}
                                           </div>
                                       </div>
                                       <h2 className={`${styles.order__name} mb-6 text text_type_main-medium`}>
                                           {oOrder.name}
                                       </h2>
                                       <ul className={`${styles.ingredients}`}>
                                           <li className={`${styles.price} ml-6`}>
                                              <span className="text text_type_digits-default pr-2">{oOrder.price}</span>&nbsp;<CurrencyIcon type="primary" />
                                           </li>

                                           {
                                                oOrder.ingredients.map((oIngredient, nIndex) => {
                                                    if(oOrder.ingredients.length < nMaxIngredientsToShow || nIndex > oOrder.ingredients.length - nMaxIngredientsToShow  -1 ){
                                                        return (
                                                    <li key={nIndex} className={styles.ingredient}>
                                                        <div className={styles.ingredient__image} title={oIngredient.name} style={{backgroundImage : 'url(' + oIngredient.image + ")"}}>
                                                        </div>
                                                        { 
                                                            (oOrder.ingredients.length > nMaxIngredientsToShow && nIndex === oOrder.ingredients.length - nMaxIngredientsToShow) && (
                                                                <div className={`${styles.plus} text text_type_digits-default`}>
                                                                    {"+" + String(oOrder.ingredients.length - nMaxIngredientsToShow)}
                                                                </div>
                                                            )
                                                        }
                                                    </li>)}
                                                    else{
                                                        return null;
                                                    }
                                                }
                                                )
                                           }
                                       </ul>
                                    </li>
                                )
                            )
                         }
                         </ul>
                         </section>
                         <section className={`${styles.pane} ml-15`}>
                            <OrdersList aaNumbers={aReadyOrders}
                                        sCaption="Готовы:"
                                        sColor="cyan"
                                         />
                            <OrdersList aaNumbers={aPendingOrders}
                                        sCaption="В работе:"
                                        sColor="white"
                                         />
                            <h2 className="mt-15 text text_type_main-medium">
                                Выполнено за&nbsp;всё&nbsp;время:
                            </h2>
                            <article className={`${styles.shadow} text text_type_digits-large`}>
                                {nTotal}
                            </article>
                            <h2 className="mt-15 text text_type_main-medium">
                                Выполнено за&nbsp;сегодня:
                            </h2>
                            <article className={`${styles.shadow} text text_type_digits-large`}>
                                {nTotalToday}
                            </article>
                         </section>
                     </>
                )
             }
         </section>
    );
};

export default Feed;