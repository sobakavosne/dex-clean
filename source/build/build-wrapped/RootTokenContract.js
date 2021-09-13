const RootTokenContractContract = {
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
                "inputs": [
                    {
                        "name": "root_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "root_owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getVersion",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getDetails",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
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
                ]
            },
            {
                "name": "getTotalSupply",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getWalletCode",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "getWalletAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
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
                "name": "sendExpectedWalletAddress",
                "inputs": [
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployWallet",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "deploy_grams",
                        "type": "uint128"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "gas_back_address",
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
                "name": "deployEmptyWallet",
                "inputs": [
                    {
                        "name": "deploy_grams",
                        "type": "uint128"
                    },
                    {
                        "name": "wallet_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address_",
                        "type": "address"
                    },
                    {
                        "name": "gas_back_address",
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
                "name": "mint",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "proxyBurn",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "sender_address",
                        "type": "address"
                    },
                    {
                        "name": "send_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "callback_address",
                        "type": "address"
                    },
                    {
                        "name": "callback_payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "tokensBurned",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "sender_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "sender_address",
                        "type": "address"
                    },
                    {
                        "name": "send_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "callback_address",
                        "type": "address"
                    },
                    {
                        "name": "callback_payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendSurplusGas",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setPaused",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendPausedCallbackTo",
                "inputs": [
                    {
                        "name": "callback_id",
                        "type": "uint64"
                    },
                    {
                        "name": "callback_addr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "transferOwner",
                "inputs": [
                    {
                        "name": "root_public_key_",
                        "type": "uint256"
                    },
                    {
                        "name": "root_owner_address_",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "symbol",
                "inputs": [],
                "outputs": [
                    {
                        "name": "symbol",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "decimals",
                "inputs": [],
                "outputs": [
                    {
                        "name": "decimals",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "start_gas_balance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "start_gas_balance",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "paused",
                "inputs": [],
                "outputs": [
                    {
                        "name": "paused",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_randomNonce",
                "type": "uint256"
            },
            {
                "key": 2,
                "name": "name",
                "type": "bytes"
            },
            {
                "key": 3,
                "name": "symbol",
                "type": "bytes"
            },
            {
                "key": 4,
                "name": "decimals",
                "type": "uint8"
            },
            {
                "key": 5,
                "name": "wallet_code",
                "type": "cell"
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
                "name": "_randomNonce",
                "type": "uint256"
            },
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
                "name": "wallet_code",
                "type": "cell"
            },
            {
                "name": "total_supply",
                "type": "uint128"
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
                "name": "start_gas_balance",
                "type": "uint128"
            },
            {
                "name": "paused",
                "type": "bool"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "5bb86dcb99fa5f994dac74f356b3470a72072685e8cab9a59143a7078c3ba414",
};
module.exports = { RootTokenContractContract };