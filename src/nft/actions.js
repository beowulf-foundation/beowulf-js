export default [
    {
      "action": "create",
      "params": [
        "fromName",
        "scid",
        "name",
        "symbol",
        "maxSupply",
        "fee",
        "authorizedIssuingAccounts"
      ]
    },
    {
      "action": "update_metadata",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "metadata",
        "fee"
      ]
    },
    {
      "action": "add_property",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "name",
        "type",
        "fee",
        "authorizedEditingAccounts"
      ]
    },
    {
      "action": "issue",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "to",
        "toType",
        "feeSymbol",
        "fee",
        "properties"
      ]
    },
    {
      "action": "transfer",
      "params": [
        "fromName",
        "scid",
        "to",
        "fee",
        "nfts"
      ]
    },
    {
      "action": "update_name",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "name",
        "fee"
      ]
    },
    {
      "action": "update_org_name",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "orgName",
        "fee"
      ]
    },
    {
      "action": "add_authorized_issuing_accounts",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "fee",
        "accounts"
      ]
    },
    {
      "action": "remove_authorized_issuing_accounts",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "fee",
        "accounts"
      ]
    },
    {
      "action": "update_property_definition",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "name",
        "newName",
        "type",
        "fee",
      ]
    },
    {
      "action": "set_properties",
      "params": [
        "fromName",
        "scid",
        "symbol",
        "fee",
        "nfts",
      ]
    },
    {
      "action": "burn",
      "params": [
        "fromName",
        "scid",
        "fee",
        "nfts",
      ]
    },
    {
      "action": "issue_multiple",
      "params": [
        "fromName",
        "scid",
        "fee",
        "instances",
      ]
    },
];
