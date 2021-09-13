const DEXRootContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sendTransfer",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDEXclientCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDEXpairCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDEXconnectorCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setRootTokenCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTONTokenWalletCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getClientAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "clientPubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "clientSoArg",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "createDEXclient",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    },
                    {
                        "name": "souint",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createDEXclientCallback",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    },
                    {
                        "name": "deployedAddress",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getPairAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "pairPubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "pairSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "pairCreator",
                        "type": "address"
                    },
                    {
                        "name": "pairRootA",
                        "type": "address"
                    },
                    {
                        "name": "pairRootB",
                        "type": "address"
                    },
                    {
                        "name": "pairRootAB",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getRootTokenAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "rootPubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "rootSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "rootName",
                        "type": "bytes"
                    },
                    {
                        "name": "rootSymbol",
                        "type": "bytes"
                    },
                    {
                        "name": "rootDecimals",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getConnectorAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "connectorPubKey",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorCommander",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "createDEXpair",
                "inputs": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    },
                    {
                        "name": "pairSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorSoArg0",
                        "type": "uint256"
                    },
                    {
                        "name": "connectorSoArg1",
                        "type": "uint256"
                    },
                    {
                        "name": "rootSoArg",
                        "type": "uint256"
                    },
                    {
                        "name": "rootName",
                        "type": "bytes"
                    },
                    {
                        "name": "rootSymbol",
                        "type": "bytes"
                    },
                    {
                        "name": "rootDecimals",
                        "type": "uint8"
                    },
                    {
                        "name": "grammsForPair",
                        "type": "uint128"
                    },
                    {
                        "name": "grammsForRoot",
                        "type": "uint128"
                    },
                    {
                        "name": "grammsForConnector",
                        "type": "uint128"
                    },
                    {
                        "name": "grammsForWallet",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createDEXpairCallback",
                "inputs": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    },
                    {
                        "name": "root01",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDetailsCallback",
                "inputs": [
                    {
                        "components": [
                            {
                                "name": "name",
                                "type": "bytes"
                            },
                            {
                                "name": "symbol",
                                "type": "bytes"
                            },
                            {
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "name": "root_public_key",
                                "type": "uint256"
                            },
                            {
                                "name": "root_owner_address",
                                "type": "address"
                            },
                            {
                                "name": "total_supply",
                                "type": "uint128"
                            }
                        ],
                        "name": "value0",
                        "type": "tuple"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getPairByRoots01",
                "inputs": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getPairByRoots10",
                "inputs": [
                    {
                        "name": "root1",
                        "type": "address"
                    },
                    {
                        "name": "root0",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getRootsByPair",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "checkPubKey",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "status",
                        "type": "bool"
                    },
                    {
                        "name": "dexclient",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getBalanceTONgrams",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balanceTONgrams",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "soUINT",
                "inputs": [],
                "outputs": [
                    {
                        "name": "soUINT",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "codeDEXclient",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXclient",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeDEXpair",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXpair",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeDEXconnector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXconnector",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeRootToken",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeRootToken",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "codeTONTokenWallet",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeTONTokenWallet",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "pairs",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "root0",
                                "type": "address"
                            },
                            {
                                "name": "root1",
                                "type": "address"
                            },
                            {
                                "name": "rootLP",
                                "type": "address"
                            }
                        ],
                        "name": "pairs",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "pairKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pairKeys",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "creatorForPair",
                "inputs": [],
                "outputs": [
                    {
                        "name": "creatorForPair",
                        "type": "map(address,address)"
                    }
                ]
            },
            {
                "name": "dataForRootAB",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "pair",
                                "type": "address"
                            },
                            {
                                "name": "root0",
                                "type": "address"
                            },
                            {
                                "name": "root1",
                                "type": "address"
                            }
                        ],
                        "name": "dataForRootAB",
                        "type": "map(address,tuple)"
                    }
                ]
            },
            {
                "name": "pubkeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pubkeys",
                        "type": "map(uint256,address)"
                    }
                ]
            },
            {
                "name": "clients",
                "inputs": [],
                "outputs": [
                    {
                        "name": "clients",
                        "type": "map(address,uint256)"
                    }
                ]
            },
            {
                "name": "clientKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "clientKeys",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "balanceOf",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balanceOf",
                        "type": "map(address,uint128)"
                    }
                ]
            },
            {
                "name": "msgOf",
                "inputs": [],
                "outputs": [
                    {
                        "name": "msgOf",
                        "type": "map(address,string)"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "soUINT",
                "type": "uint256"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "name": "codeDEXclient",
                "type": "cell"
            },
            {
                "name": "codeDEXpair",
                "type": "cell"
            },
            {
                "name": "codeDEXconnector",
                "type": "cell"
            },
            {
                "name": "codeRootToken",
                "type": "cell"
            },
            {
                "name": "codeTONTokenWallet",
                "type": "cell"
            },
            {
                "name": "roots",
                "type": "map(address,map(address,address))"
            },
            {
                "components": [
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    },
                    {
                        "name": "rootLP",
                        "type": "address"
                    }
                ],
                "name": "pairs",
                "type": "map(address,tuple)"
            },
            {
                "name": "pairKeys",
                "type": "address[]"
            },
            {
                "name": "creatorForPair",
                "type": "map(address,address)"
            },
            {
                "components": [
                    {
                        "name": "pair",
                        "type": "address"
                    },
                    {
                        "name": "root0",
                        "type": "address"
                    },
                    {
                        "name": "root1",
                        "type": "address"
                    }
                ],
                "name": "dataForRootAB",
                "type": "map(address,tuple)"
            },
            {
                "name": "pubkeys",
                "type": "map(uint256,address)"
            },
            {
                "name": "clients",
                "type": "map(address,uint256)"
            },
            {
                "name": "clientKeys",
                "type": "address[]"
            },
            {
                "name": "balanceOf",
                "type": "map(address,uint128)"
            },
            {
                "name": "msgOf",
                "type": "map(address,string)"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "b6771040e1e74159e7912183d9ac58dc76510148d9f6ebfb92afda92e927e61f",
};
module.exports = { DEXRootContract };