import Promise from 'bluebird';
import beowulfBroadcast from '../broadcast';
import actions from './actions';
import newDebug from 'debug';
import { camelCase } from '../utils';
const debug = newDebug('beowulf:nft');

const MIN_TRANSACTION_FEE = 0.01000;
const WD_SYMBOL = "W";

const beowulfNft = {};

const validateFee = (_fee, minFee) => {
    //Validate format of fee
    const amount = _fee.split(" ")[0];
    const _symbol = _fee.split(" ")[1];
    if (_symbol !== WD_SYMBOL) {
        return false
    }
    //Parse fee to float
    const amt = parseFloat(amount);
    if (isNaN(amt)) {
        return false;
    }
    if (amt < minFee) {
        return false;
    }
    return true
};

const validateOptions = (actionName, options, callback) => {
    const symbolPattern = /\b[a-zA-Z0-9]{1,100}\b/;
    const namePattern = /\b[a-zA-Z 0-9]{1,25}\b/; // NFT name: number, character, space, max length 25
    const orgNamePattern = /\b[a-zA-Z 0-9]{1,50}\b/; // NFT organization name: number, character, space, max length 50

    if (!validateFee(options.fee, MIN_TRANSACTION_FEE)) {
        callback(new Error('Fee is not valid'));
        return false;
    }
    if (!options.scid) {
        options.scid = 's01';
    }    
    if (options.properties != undefined) {
        if (!JSON.stringify(options.properties).replace('{', '').replace('}', '')) {
            delete options.properties;
        }
    }
    if (!options.authorizedIssuingAccounts) {
        delete options.authorizedIssuingAccounts;
    }
    if (options.symbol != undefined && !options.symbol.match(symbolPattern)) {
        callback(new Error("Symbol is not valid"));
        return false;
    }
    if (options.name != undefined && !options.name.match(namePattern)) {
        callback(new Error("Name is not valid"));
        return false;
    }
    if (options.orgName != undefined && !options.orgName.match(orgNamePattern)) {
        callback(new Error("Organization name of NFT is not valid"));
        return false;
    }
    const propertyTypeList = ['number', 'string', 'boolean'];
    if (options.type != undefined && !propertyTypeList.includes(options.type)) {
        callback(new Error(`Property type must be in ${JSON.stringify(propertyTypeList)}`));
        return false;
    }
    if (options.instances != undefined && options.instances.length > 10) {
        callback(new Error("Maximum of instances should be 10"));
        return false;
    }
    if (options.maxSupply != undefined && parseInt(options.maxSupply) <= 0) {
        callback(new Error("Max supply is not valid"));
        return false;
    }
    return true;
};

actions.forEach((action) => {
    const actionName = camelCase(action.action);
    const actionParams = action.params || [];

    beowulfNft[actionName] =
        function (wif, ...args) {
            debug(`Parsing action "${actionName}" with`, { args });
            const options = actionParams.reduce((memo, param, i) => {
                memo[param] = args[i]; // eslint-disable-line no-param-reassign
                return memo;
            }, {});
            const callback = args[args.length - 1];

            // validate option
            if (!validateOptions(actionName, options, callback)) {
                return;
            }

            const owners = [options.fromName];
            const scid = options.scid;
            const fee = options.fee;

            // create scoperation
            const scoperation = {};
            scoperation.contractName = 'nft';
            scoperation.contractAction = actionName;

            const tempContractPayload = JSON.parse(JSON.stringify(options));
            delete tempContractPayload.fromName;
            delete tempContractPayload.scid;
            delete tempContractPayload.fee;
            scoperation.contractPayload = tempContractPayload;

            beowulfBroadcast.smartContract(wif, owners, scid, JSON.stringify(scoperation), fee, callback);
        };
});




// beowulfNft.createNft = function (wif, fromName, scid, name, symbol, maxSupply, fee, authorizedIssuingAccounts, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!name) {
//         cb(new Error("Name is not valid"));
//         return;
//     }
//     if (!symbol) {
//         cb(new Error("Symbol is not valid"));
//         return;
//     }
//     if (!scid) {
//         scid = 's01';
//     }
//     const accounts = JSON.stringify(authorizedIssuingAccounts);
//     let scoperation = '';
//     if (authorizedIssuingAccounts.length > 0) {
//         if (!!maxSupply) {
//             scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"create\",\"contractPayload\":{\"name\":\"${name}\",\"symbol\":\"${symbol}\",\"maxSupply\":\"${maxSupply}\",\"authorizedIssuingAccounts\":${accounts}}}`;
//         } else {
//             scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"create\",\"contractPayload\":{\"name\":\"${name}\",\"symbol\":\"${symbol}\",\"authorizedIssuingAccounts\":${accounts}}}`;
//         }
//     } else {
//         if (!!maxSupply) {
//             scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"create\",\"contractPayload\":{\"name\":\"${name}\",\"symbol\":\"${symbol}\",\"maxSupply\":\"${maxSupply}\"}}`;
//         } else {
//             scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"create\",\"contractPayload\":{\"name\":\"${name}\",\"symbol\":\"${symbol}\"}}`;
//         }
//     }

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.issueNFT = function (wif, fromName, scid, symbol, to, fee, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!to) {
//         cb(new Error('Recipient is not valid'));
//         return;
//     }
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"issue\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"to\":\"${to}\",\"toType\":\"user\",\"feeSymbol\":\"BEE\"}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.issueWithProperties = function (wif, fromName, scid, symbol, to, fee, properties, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!to) {
//         cb(new Error('Recipient is not valid'));
//         return;
//     }
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const props = JSON.stringify(properties);

//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"issue\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"to\":\"${to}\",\"toType\":\"user\",\"feeSymbol\":\"BEE\",\"properties\":${props}}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.transferNFT = function (wif, fromName, scid, to, fee, nfts, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (nfts.length <= 0) {
//         cb(new Error('There is no nft to transfer'));
//         return;
//     }
//     if (!to) {
//         cb(new Error('Recipient is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }

//     const _nfts = JSON.stringify(nfts);

//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"transfer\",\"contractPayload\":{\"to\":\"${to}\",\"nfts\":${_nfts}}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.updateMetadata = function (wif, fromName, scid, symbol, url, image, fee, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"updateMetadata\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"metadata\":{\"url\":\"${url}\",\"image\":\"${image}\"}}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.addProperty = function (wif, fromName, scid, symbol, propertyName, propertyType, fee, authorizedEditingAccounts, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!propertyName || !propertyType) {
//         cb(new Error('Property is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }

//     const accounts = JSON.stringify(authorizedEditingAccounts);
//     let scoperation = '';
//     if (authorizedEditingAccounts.length > 0) {
//         scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"addProperty\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"name\":\"${propertyName}\",\"type\":\"${propertyType}\",\"authorizedEditingAccounts\":${accounts}}}`;
//     } else {
//         scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"addProperty\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"name\":\"${propertyName}\",\"type\":\"${propertyType}\"}}`;
//     }

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.updateName = function (wif, fromName, scid, symbol, name, fee, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"updateName\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"name\":\"${name}\"}}`;
//     ;
//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.updateOrgName = function (wif, fromName, scid, symbol, orgName, fee, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"updateOrgName\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"orgName\":\"${orgName}\"}}`;
//     ;
//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.addAuthorizedIssuingAccounts = function (wif, fromName, scid, symbol, fee, issuingAccounts, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (issuingAccounts.length <= 0) {
//         cb(new Error('There is no account to add'));
//         return;
//     }
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const accounts = JSON.stringify(issuingAccounts);
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"addAuthorizedIssuingAccounts\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"accounts\":${accounts}}}`;
//     ;
//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.removeAuthorizedIssuingAccounts = function (wif, fromName, scid, symbol, fee, issuingAccounts, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (issuingAccounts.length <= 0) {
//         cb(new Error('There is no account to remove'));
//         return;
//     }
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const accounts = JSON.stringify(issuingAccounts);
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"removeAuthorizedIssuingAccounts\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"accounts\":${accounts}}}`;
//     ;
//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.updatePropertyDefinition = function (wif, fromName, scid, symbol, propertyName, newPropertyName, newPropertyType, fee, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     if (!propertyName || !newPropertyName || !newPropertyType) {
//         cb(new Error('Property is not valid'));
//         return;
//     }
//     const owners = [fromName];
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"updatePropertyDefinition\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"name\":\"${propertyName}\",\"type\":\"${newPropertyType}\",\"newName\":\"${newPropertyName}\"}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.setProperties = function (wif, fromName, scid, symbol, fee, nfts, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     if (nfts.length <= 0) {
//         cb(new Error('There is no property to set'));
//         return;
//     }
//     if (!symbol) {
//         cb(new Error('Symbol is not valid'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const owners = [fromName];
//     const _nfts = JSON.stringify(nfts);
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"setProperties\",\"contractPayload\":{\"symbol\":\"${symbol}\",\"nfts\":${_nfts}}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.burnNft = function (wif, fromName, scid, fee, nfts, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     if (nfts.length <= 0) {
//         cb(new Error('There is no nft to burn'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const owners = [fromName];
//     const _nfts = JSON.stringify(nfts);
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"burn\",\"contractPayload\":{\"nfts\":${_nfts}}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }

// beowulfNft.multipleIssueNFT = function (wif, fromName, scid, fee, instances, cb) {
//     if (!validateFee(fee, MIN_TRANSACTION_FEE)) {
//         cb(new Error('Fee is not valid'));
//         return;
//     }
//     if (instances.length <= 0) {
//         cb(new Error('There is no nft to issue'));
//         return;
//     }
//     if (!scid) {
//         scid = "s01"
//     }
//     const owners = [fromName];
//     const _instances = JSON.stringify(instances);
//     const scoperation = `{\"contractName\":\"nft\",\"contractAction\":\"issueMultiple\",\"contractPayload\":{\"instances\":${_instances}}}`;

//     beowulfBroadcast.smartContract(wif, owners, scid, scoperation, fee, cb);
// }




Promise.promisifyAll(beowulfNft);
exports = module.exports = beowulfNft;
