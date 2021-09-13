const DEXClientContract = {
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
                        "name": "ownerAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "connectPair",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "statusConnection",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "setPair",
                "inputs": [
                    {
                        "name": "arg0",
                        "type": "address"
                    },
                    {
                        "name": "arg1",
                        "type": "address"
                    },
                    {
                        "name": "arg2",
                        "type": "address"
                    },
                    {
                        "name": "arg3",
                        "type": "address"
                    },
                    {
                        "name": "arg4",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getConnectorAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "connectorSoArg",
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
                "name": "connectRoot",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "souint",
                        "type": "uint256"
                    },
                    {
                        "name": "gramsToConnector",
                        "type": "uint128"
                    },
                    {
                        "name": "gramsToRoot",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "statusConnected",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "connectCallback",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getAllDataPreparation",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pairKeysR",
                        "type": "address[]"
                    },
                    {
                        "name": "rootKeysR",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "processSwapA",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "qtyA",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "processSwapStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "processSwapB",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "qtyB",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "processSwapStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "processLiquidity",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "qtyA",
                        "type": "uint128"
                    },
                    {
                        "name": "qtyB",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "processLiquidityStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "returnLiquidity",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "returnLiquidityStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "tokensReceivedCallback",
                "inputs": [
                    {
                        "name": "token_wallet",
                        "type": "address"
                    },
                    {
                        "name": "token_root",
                        "type": "address"
                    },
                    {
                        "name": "amount",
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
                        "name": "sender_wallet",
                        "type": "address"
                    },
                    {
                        "name": "original_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "updated_balance",
                        "type": "uint128"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCallback",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "token_wallet",
                        "type": "address"
                    },
                    {
                        "name": "token_root",
                        "type": "address"
                    },
                    {
                        "name": "amount",
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
                        "name": "sender_wallet",
                        "type": "address"
                    },
                    {
                        "name": "original_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "updated_balance",
                        "type": "uint128"
                    },
                    {
                        "name": "payload_arg0",
                        "type": "uint8"
                    },
                    {
                        "name": "payload_arg1",
                        "type": "address"
                    },
                    {
                        "name": "payload_arg2",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getBalance",
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
                "name": "createNewPair",
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
                    },
                    {
                        "name": "grammsTotal",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getPairData",
                "inputs": [
                    {
                        "name": "pairAddr",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "pairStatus",
                        "type": "bool"
                    },
                    {
                        "name": "pairRootA",
                        "type": "address"
                    },
                    {
                        "name": "pairWalletA",
                        "type": "address"
                    },
                    {
                        "name": "pairRootB",
                        "type": "address"
                    },
                    {
                        "name": "pairWalletB",
                        "type": "address"
                    },
                    {
                        "name": "pairRootAB",
                        "type": "address"
                    },
                    {
                        "name": "curPair",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "sendTokens",
                "inputs": [
                    {
                        "name": "tokenRoot",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
                        "type": "uint128"
                    },
                    {
                        "name": "grams",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "sendTokenStatus",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "sendTransaction",
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
                    },
                    {
                        "name": "flags",
                        "type": "uint8"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "rootDEX",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootDEX",
                        "type": "address"
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
                "name": "codeDEXConnector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeDEXConnector",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "owner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "rootKeys",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootKeys",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "rootWallet",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootWallet",
                        "type": "map(address,address)"
                    }
                ]
            },
            {
                "name": "rootConnector",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rootConnector",
                        "type": "map(address,address)"
                    }
                ]
            },
            {
                "name": "counterCallback",
                "inputs": [],
                "outputs": [
                    {
                        "name": "counterCallback",
                        "type": "uint256"
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
                                "name": "status",
                                "type": "bool"
                            },
                            {
                                "name": "rootA",
                                "type": "address"
                            },
                            {
                                "name": "walletA",
                                "type": "address"
                            },
                            {
                                "name": "rootB",
                                "type": "address"
                            },
                            {
                                "name": "walletB",
                                "type": "address"
                            },
                            {
                                "name": "rootAB",
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
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "rootDEX",
                "type": "address"
            },
            {
                "key": 2,
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "key": 3,
                "name": "codeDEXConnector",
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
                "name": "rootDEX",
                "type": "address"
            },
            {
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "name": "codeDEXConnector",
                "type": "cell"
            },
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "rootKeys",
                "type": "address[]"
            },
            {
                "name": "rootWallet",
                "type": "map(address,address)"
            },
            {
                "name": "rootConnector",
                "type": "map(address,address)"
            },
            {
                "components": [
                    {
                        "name": "root_address",
                        "type": "address"
                    },
                    {
                        "name": "souint",
                        "type": "uint256"
                    },
                    {
                        "name": "status",
                        "type": "bool"
                    }
                ],
                "name": "connectors",
                "type": "map(address,tuple)"
            },
            {
                "name": "counterCallback",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "token_wallet",
                        "type": "address"
                    },
                    {
                        "name": "token_root",
                        "type": "address"
                    },
                    {
                        "name": "amount",
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
                        "name": "sender_wallet",
                        "type": "address"
                    },
                    {
                        "name": "original_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "updated_balance",
                        "type": "uint128"
                    },
                    {
                        "name": "payload_arg0",
                        "type": "uint8"
                    },
                    {
                        "name": "payload_arg1",
                        "type": "address"
                    },
                    {
                        "name": "payload_arg2",
                        "type": "address"
                    }
                ],
                "name": "callbacks",
                "type": "map(uint256,tuple)"
            },
            {
                "components": [
                    {
                        "name": "status",
                        "type": "bool"
                    },
                    {
                        "name": "rootA",
                        "type": "address"
                    },
                    {
                        "name": "walletA",
                        "type": "address"
                    },
                    {
                        "name": "rootB",
                        "type": "address"
                    },
                    {
                        "name": "walletB",
                        "type": "address"
                    },
                    {
                        "name": "rootAB",
                        "type": "address"
                    }
                ],
                "name": "pairs",
                "type": "map(address,tuple)"
            },
            {
                "name": "pairKeys",
                "type": "address[]"
            }
        ]
    },
    tvc: "te6ccgEChAEAI7MAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8guBBwSDAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rlMBgEU0x8B2zz4R27yfAgDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nyAgAgCKCCCEEzuZGy74wIgghB7V4v2u+MCPwkDPCCCEFT9xUi74wIgghBxDZRGu+MCIIIQe1eL9rvjAjQhCgRQIIIQcmeW7brjAiCCEHJwx4O64wIgghB5q1cIuuMCIIIQe1eL9rrjAhoSDQsC7DD4RvLgTNMf+ERYb3X4ZNHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA+1eL9ozxbLf8lw+wCOMfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/Lf8n4RG8U+wDi4wB/+GcMfAAk+ERwb3Jwb3GAQG90+GT4J28QA9Aw+Eby4Ez4Qm7jANcN/5XU0dDT/9/R2zwrjkQt0NMB+kAwMcjPhyDOcc8LYV6gyM+T5q1cIs5VkMjOy3/L/1VgyM5VUMjOVUDIzst/ywdZyM4ByM7Nzc3Nzc3NyXD7AJJfC+LjAH/4Z38OfAHcjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQPAdyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwII0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAD/o0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhFIG6SMHDe+EK6II42MPhJ+E2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgljAg+E3HBd4x3/LgZvgAVQr4U4EBAPQPjoCOgOIgbxAyLxEAUDwgbxE7IG8SOiBvEzkgbxQ4IG8VNyBvFjYgbxc1IG8YNCBvGTNvGjEDvDD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPJwx4OM8WygDJcPsAkTDi4wB/+Gd/E3wDxPhFIG6SMHDe+EK6II42MPhJ+E2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgljAg+E3HBd4x3/LgZvgAcCP4VIEBC/QLjoCOgOIgbxH4UIEBC/QKYF4UAsqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4UYEBC/QLjoCOKI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgbwPiIW8T+FCBAQv0CnIVAr6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4UYEBC/QLjoCOKI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgbwPiIm8QIHIWAdyOZDAibxH4T4EBC/QKb6ExII5SMCJvE/hPgQEL9ApvoTEgjkAwIm8V+E+BAQv0Cm+hMSCOLjAibxH4UIEBC/QKb6ExII4cMCJvE/hQgQEL9ApvoTEgmzAhbxIglDAgbxLe3t7e3t7ebDGOgN5sMRcD9CP4VIEBC/QLjoCOgOIgbxH4UIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfIW8T+FCBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE38gjbxX4T4EBC/QKYF4YAf6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4KHJVAssHzs7JyCRvFfhPgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4KHJVAssHzs7JAVN0bxLIz5E6+/1Gzst/zMkBGQC0JlUEbxTIz5E6+/1Gzst/zMlVAsjPhYjOjQSRZaC8AAAAAAAAAAAAAAAAAADAzxZYzxTJcPsAAcjPhYjOjQSRZaC8AAAAAAAAAAAAAAAAAADAzxbMyXD7ADB/A6gw+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAPJnlu2M8WygDJcPsAkTDi4wB/+Gd/G3wD4PhFIG6SMHDe+EK6II42MPhJ+E2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgljAg+E3HBd4x3/LgZvgA+CdvEIIQWWgvAL7y4HBwIvhUgQEL9AuOgI6A4iBvEfhQgQEL9ApgXhwCyo4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hRgQEL9AuOgI4ojQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcCBvA+IhbxP4UIEBC/QKch0Cvo4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hRgQEL9AuOgI4ojQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcCBvA+IibxAgch4BuI5SMCJvEfhPgQEL9ApvoTEgjkAwIm8T+E+BAQv0Cm+hMSCOLjAibxH4UIEBC/QKb6ExII4cMCJvE/hQgQEL9ApvoTEgmzAhbxIglDAgbxLe3t7e3t5sMY6A3mwhHwP8IvhUgQEL9AuOgI6A4iBvE/hQgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/IIm8R+E+BAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yNvEXFVAssHzs7JJFUCYF4gAGRvFMjPkTr7/UbOy3/MyQHIz4WIzo0EkWWgvAAAAAAAAAAAAAAAAAAAwM8WzMlw+wAwfwRQIIIQWUEfubrjAiCCEF8Lz9664wIgghBjU2anuuMCIIIQcQ2URrrjAignJiIDlDD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADxDZRGjPFsoAyXD7AJEw4ts8f/hnfyN8AdD4RSBukjBw3vhCuiCONjD4SfhNjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWzIJYwIPhNxwXeMd/y4Gb4APgnbxCCEFloLwC+8uBucCH4VIEBC/QKb6ExjoDfMSQEqiH4VIEBC/QLjoCOgOJwb1Ai+FRY2zzJWYEBC/QT+HQh+FVvIiGkVSCAIPQWbwL4dYgiyM+FiM6NBJFloLwAAAAAAAAAAAAAAAAAAMDPFszJcPsAMH9gXjclAAhixa7rAVIw0ds8+E8hjhyNBHAAAAAAAAAAAAAAAAA41Nmp4MjO9ADJcPsA3n/4Z38BUDDR2zz4TSGOG40EcAAAAAAAAAAAAAAAADfC8/egyM7OyXD7AN5/+Gd/A74w+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39cNf5XU0dDTf9/XDf+V1NHQ0//f+kGV1NHQ+kDf+kGV1NHQ+kDf+kGV1NHQ+kDf1w1/ldTR0NN/39TR2zzbPH/4Z38pfAT6+En4T4EBC/QKb6Ex8uBo+CdvEGim/mChtX9y+wL4UvhTgQEA9A+OgI6A4lUIb1BVB29RVQZvUlUFb1NVBG9UVQNvVVUCb1ZYb1cB0CDTB/pA+kAwJFUCb1g0I1hvWTMiAW9aMvhS+FNVAts8yVmBAQD0F/hz+FKkIPhywgoyLy4qAQiOgN4wKwEe+FNwjoDYAYEBAPRbMPhzLAE6+FOBAQD0h2+hit4gbpJbcJggbvJ/byIwMeME2TAtAQwB0Ns8bwIzAFRvK16QyM5VkMjOy3/L/1VgyM5VUMjOVUDIzst/ywdZyM4ByM7Nzc3Nzc0B3I0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMAHcjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcCCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQxAEyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARvCwEG0Ns8MwDG+kD6QZXU0dD6QN/XDX+V1NHQ03/f1w3/ldTR0NP/3/pBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA39cNf5XU0dDTf9/XDQeV1NHQ0wff+kGV1NHQ+kDf+kGV1NHQ+kDf0W8LBFAgghBN/mpYuuMCIIIQUGkGo7rjAiCCEFHvZT+64wIgghBU/cVIuuMCPjk4NQOAMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/6QZXU0dD6QN/6QZXU0dD6QN/6QZXU0dD6QN/R2zzbPH/4Z382fAOi+En4VIEBC/QKb6Ex8uBs+CdvEGim/mChtX9y+wL4SSD4VIEBC/QLjoCOgOJ/b1BVBW9RVQRvUlUDb1NVAm9UWG9VAfhUWNs8yVmBAQv0E/h0YF43ADRvJl5AyMoAzlUwyM5VIMjOWcjOAcjOzc3NzQFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAANHvZT+DIzs7JcPsA3n/4Z38DzjD4RvLgTPhCbuMA+kGV1NHQ+kDf+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAANBpBqOM8WygDJcPsAkTDi4wB/+Gd/OnwB9PhFIG6SMHDe+EK6II42MPhJ+E2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgljAg+E3HBd4x3/LgZvgAcCT4UIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfOwFWjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwWOgN9sQTwB/iT4UIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfyCb4T4EBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+Ch0VQLLB87OyVNFyM+ROvv9Rs7Lf8zJI1jIz4WIzgE9ABr6AnHPC2rMyXD7ADB/AV4w0ds8+E4hjiKNBHAAAAAAAAAAAAAAAAAzf5qWIMjOAW8iAssf9ADJcPsA3n/4Z38EUCCCEBUWsfi74wIgghAzNqVSu+MCIIIQRDh4CrvjAiCCEEzuZGy74wJ1ZFJABFAgghBG8mpKuuMCIIIQR1ZU3LrjAiCCEEykRvS64wIgghBM7mRsuuMCUEpDQQJsMPhG8uBM+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/XDQeV1NHQ0wff1NHbPOMAf/hnQnwAyPhFIG6SMHDe+EK6II42MPhJ+E2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgljAg+E3HBd4x3/LgZvgAVQJVEsjPhYDKAHPPQM4B+gJxzwtqzMkB+wADqDD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39HbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAzKRG9IzxbKAMlw+wCRMOLjAH/4Z39EfAPg+EUgbpIwcN74QrogjjYw+En4TY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMcFsyCWMCD4TccF3jHf8uBm+AD4J28QghBZaC8AvvLgcHAi+FSBAQv0C46AjoDiIG8R+FCBAQv0CmBeRQLKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+FGBAQv0C46AjiiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwIG8D4iFvE/hQgQEL9ApyRgK+jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+FGBAQv0C46AjiiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARwIG8D4iJvECByRwG4jlIwIm8R+E+BAQv0Cm+hMSCOQDAibxP4T4EBC/QKb6ExII4uMCJvEfhQgQEL9ApvoTEgjhwwIm8T+FCBAQv0Cm+hMSCbMCFvEiCUMCBvEt7e3t7e3mwxjoDebCFIA/wi+FSBAQv0C46AjoDiIG8R+FCBAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE38gibxP4T4EBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfI28TcVUCywfOzskkVQJgXkkAZG8SyM+ROvv9Rs7Lf8zJAcjPhYjOjQSRZaC8AAAAAAAAAAAAAAAAAADAzxbMyXD7ADB/AsAw+EJu4wD4RvJz+kGV1NHQ+kDf0fhJ+ErHBY5E+CdvEIIQO5rKAKC1f2im/mChtX9y+wIg+G1w+HL4Tfgo+ELIz5DoFa2Oy//OAcjOzcn4SsjPhYjOcc8LbszJgQCA+wBMSwHYjmP4AI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhtcPhy+E34KPhCyM+Q6BWtjsv/zgHIzs3J+ErIz4WIzo0EkHc1lAAAAAAAAAAAAAAAAAAAwM8WzMlw+wDiMNs8f/hnfAIW7UTQ10nCAYqOgOJ/TQL+cO1E0PQFcSGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GpyIYBA9A6T1wv/kXDi+GtzIYBA9A+OgN/4bI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhtcG1vAvhubfhvbU9OAET4cG34cXD4cm34c234dHBtbwL4dYBA9A7yvdcL//hicPhjAQKIgwP8MPhG8uBM+EJu4wDTH/hEWG91+GTXDf+V1NHQ0//f0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TG8mpKs7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnf1F8AJD4RHBvcnBvcYBAb3T4ZG34QsjL/3BYgED0QwHIy/9xWIBA9EP4KHJYgED0Fsj0AMn4TMjPhID0APQAz4HJ+QDIz4oAQMv/ydAEUCCCEDZnPqm64wIgghA36iCzuuMCIIIQPBcAYbrjAiCCEEQ4eAq64wJjYlpTA6gw+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMQ4eAqM8WygDJcPsAkTDi4wB/+Gd/VHwDxPhFIG6SMHDe+EK6II42MPhJ+E2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgljAg+E3HBd4x3/LgZvgAcCL4VIEBC/QLjoCOgOIgbxH4UIEBC/QKYF5VAsqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4UYEBC/QLjoCOKI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgbwPiIW8T+FCBAQv0CnJWAr6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4UYEBC/QLjoCOKI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgbwPiIm8QIHJXAdyOZDAibxH4T4EBC/QKb6ExII5SMCJvE/hPgQEL9ApvoTEgjkAwIm8V+E+BAQv0Cm+hMSCOLjAibxH4UIEBC/QKb6ExII4cMCJvE/hQgQEL9ApvoTEgmzAhbxIglDAgbxLe3t7e3t7ebDGOgN5sIVgD9iL4VIEBC/QLjoCOgOLIIW8T+E+BAQv0Co4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3yJvEfhPgQEL9AqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN9zVQLLB87OyV8kyGBeWQC+z5G0qjiOy3/OzMkBbxX4UIEBC/QKjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfyM+FiM6NBJFloLwAAAAAAAAAAAAAAAAAAMDPFszJcPsAMH8DuDD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds8J445KdDTAfpAMDHIz4cgznHPC2FeYMjPkvBcAYbKAM5VQMjOVTDIzlUgyM5ZyM4ByM7Nzc3Nzc3JcPsAkl8H4uMAf/hnf1t8AdpwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEXAP8jQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEJ/hUgQEL9AuOgI6A4iBvEDggYF5dACpvETcgbxI2IG8TNSBvFDRvFTJVBjEB2nCNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARfAJSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARvBgEG0Ns8YQBW0gD6QPpBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA39FvBgFSMNHbPPhSIY4cjQRwAAAAAAAAAAAAAAAALfqILODIzsv/yXD7AN5/+Gd/AV4w0ds8+FUhjiKNBHAAAAAAAAAAAAAAAAAtmc+qYMjOAW8iAssf9ADJcPsA3n/4Z38EUCCCEBiDpVK64wIgghAsZdkPuuMCIIIQMqaE4brjAiCCEDM2pVK64wJsZ2ZlAVIw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAAszalUoMjOy//JcPsA3n/4Z38BUDDR2zz4TCGOG40EcAAAAAAAAAAAAAAAACypoThgyM7MyXD7AN5/+Gd/Azgw+Eby4Ez4Qm7jAPpBldTR0PpA39HbPNs8f/hnf2h8Av74SfhRgQEL9ApvoTHy4G34J28QaKb+YKG1f3L7AvhJIPhRgQEL9AuOgI4ojQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcCBvA+L4TiFvEAFvIiGkVSCAIPQWbwL4bvhPIW8QAVUDWYEBC/QS+G/4UCFvEAEjcmkDwFmBAQv0EvhwiCLIz4WIzo0EkEeGjAAAAAAAAAAAAAAAAAAAwM8WzMlw+wCIIsjPhYjOjQSQR4aMAAAAAAAAAAAAAAAAAADAzxbMyXD7AH9vUgH4UVjbPMlZgQEL9BP4cWtqcQAIYBgiCAAICHAcnQPQMPhG8uBM+EJu4wD6QZXU0dD6QN/XDf+V1NHQ0//f1w1/ldTR0NN/39cNf5XU0dDTf9/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAJiDpVKM8WygDJcPsAkTDi2zx/+Gd/bXwC/vhFIG6SMHDe+EK6II42MPhJ+E2NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATHBbMgljAg+E3HBd4x3/LgZvgAIYIQO5rKAL4gjhcwIIIQstBeAL4gmzD4J28QXyKgtX++3t7y4G9wJPhPgQEL9ApvoTGOgN9vbgAEbEED6G34QsjL/3BYgED0QyTIy/9xWIBA9EP4KHJYgED0Fsj0AMn4TMjPhID0APQAz4HJiAEg+QD4KPpCbxLIz4ZAygfL/8nQAVNRyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPg1jPFMlw+wAg+FGBAQv0C46AdHJwAcSOKI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAgbwPiJm9QJW9RcG9SIfhRWNs8yVmBAQv0E/hxJcjPkLojixLOySNYyM+FiM4B+gJxzwtqzMlw+wAwf3EAEm8jAsjOy//KAAEG0Ns8cwAS+kDT/9IA0W8DAAhotV8/BE4gggu3+zS64wIgghAHp+jHuuMCIIIQDw5QirrjAiCCEBUWsfi64wJ6eXh2A4ww+Eby4Ez4Qm7jANHbPCKOLSTQ0wH6QDAxyM+HIM6AYs9AXgHPklRax+IBbyICyx/0AAFvIgLLH/QAyXD7AJFb4uMAf/hnf3d8AAj4VfhOAVIw0ds8+FAhjhyNBHAAAAAAAAAAAAAAAAAjw5QioMjO9ADJcPsA3n/4Z38BUjDR2zz4VCGOHI0EcAAAAAAAAAAAAAAAACHp+jHgyM70AMlw+wDef/hnfwL6MPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/XDf+V1NHQ0//f1w3/ldTR0NP/39cN/5XU0dDT/9/XDf+V1NHQ0//fINdKwAGT1NHQ3tQg10vAAQHAALCT1NHQ3tTXDQeV1NHQ0wff1w1/ldTR0NN/39cNf5XU0dDTf99/ewJM1w1/ldTR0NN/39cNf5XU0dDTf9/XDX+V1NHQ03/f0ds84wB/+Gd9fACk+FX4VPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POVaDIy//MzgFvIgLLH/QA9ABVUMj0APQAy//0AFnI9AABbyICyx/0AM3NzcntVAH++EUgbpIwcN74Qrry4GtTBHIlqLV/oLV/ciSotX+gtX8loLV/ubMgmjAgghEqBfIAubPe8uBq+CdvECG58tBp+AACVQJVA1UEVQVVBlUHVQhVCVUKVQtVDMjPkTH2Ks7OVbDIzsv/VZDIy//L/8v/zMzLB8t/VSDIy3/Lf8t/zX4ALs3NyQH4SsjPhYjOAfoCcc8LaszJcfsAAKbtRNDT/9M/0wAx+kDU0dDT/9T6QNMf9ARZbwIB9ATU0dD0BPQE0//0BNTR0PQE0x/0BFlvAgHR+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShg4IAFHNvbCAwLjQ5LjAAAA==",
    code: "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",
    codeHash: "28aa503658835953dbd2f06d7a25ffcfd15fb5fe8ba864a3056a2539679e2c8b",
};
module.exports = { DEXClientContract };