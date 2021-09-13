const DEXConnectorContract = {
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
                "name": "deployEmptyWallet",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "expectedWalletAddressCallback",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "wallet_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "owner_address",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setTransferCallback",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setBouncedCallback",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "transfer",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokens",
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
                "name": "burn",
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint128"
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
                "name": "getBalance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balance",
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
                "name": "dexclient",
                "inputs": [],
                "outputs": [
                    {
                        "name": "dexclient",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "drivenRoot",
                "inputs": [],
                "outputs": [
                    {
                        "name": "drivenRoot",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "driven",
                "inputs": [],
                "outputs": [
                    {
                        "name": "driven",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "statusConnected",
                "inputs": [],
                "outputs": [
                    {
                        "name": "statusConnected",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "soUINT",
                "type": "uint256"
            },
            {
                "key": 2,
                "name": "dexclient",
                "type": "address"
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
                "name": "dexclient",
                "type": "address"
            },
            {
                "name": "drivenRoot",
                "type": "address"
            },
            {
                "name": "driven",
                "type": "address"
            },
            {
                "name": "statusConnected",
                "type": "bool"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "e4834d5edcb90e97998008cdff6900cdb6fae43ce63cebbceffcea7b84a40487",
};
module.exports = { DEXConnectorContract };