<template>
  <div class="flex flex-col w-screen">
    <div>
      <input class="w-1/2 border-2 border-black" :value="input" @input="onChange"/>
      <div><button @click="onClick">start</button></div>
    </div>
    <div class="mt-4 w-1/2 h-[50vh] border-2 border-black whitespace-pre-wrap">{{ log }}</div>
    <div>{{ mixinUrl }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { v4 } from 'uuid';
import { buildMultiSigsTransaction, encodeScript } from '@mixin.dev/mixin-node-sdk';
import { useUserClient, BotKeystore, useBotClient, sleep } from '../utils';

const botClient = useBotClient();
const userClient = useUserClient();
const input = ref("");
const log = ref("");
const mixinUrl = ref("");

const onChange = (e) => {
  input.value = e.target.value;
}

const readOutput = async (hash, members, threshold, offset = '') => {
  let new_offset = offset;
  const outputs = await botClient.multisig.outputs({
    members,
    threshold,
    offset,
    limit: 10,
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const output of outputs) {
    new_offset = output.updated_at;
    if (output.transaction_hash === hash) return output;
  }

  await sleep(1000 * 5);
  return readOutput(hash, members, threshold, new_offset);
};

const onClick = async () => {
  // const bot = await botClient.user.profile();
  // const asset_id = '965e5c6e-434c-3fa9-b780-c50f43cd955c';
  // const amount = '0.0001';
  // const members = [bot.app.creator_id, BotKeystore.client_id];
  // const threshold = 1;

  // const sendTxReceipt = await botClient.transfer.toAddress(BotKeystore.pin, {
  //   asset_id,
  //   amount,
  //   trace_id: v4(),
  //   memo: 'send to multisig',
  //   opponent_multisig: {
  //     threshold,
  //     receivers: members,
  //   },
  // });
  // log.value += 'send to multi-signature account...\n'
  // log.value += `transaction hash:\n`, 
  // log.value += sendTxReceipt.transaction_hash + '\n\n';

  // log.value += 'read transaction output...\n';
  // const utxo = await readOutput(sendTxReceipt.transaction_hash, members, threshold, '');
  // log.value += 'finish\n\n';

  // log.value += 'refund to bot:\n';
  // const asset = await botClient.asset.fetch(asset_id);
  // const receivers = await botClient.transfer.outputs([
  //   {
  //     receivers: [BotKeystore.user_id],
  //     index: 0,
  //   },
  // ]);
  // log.value += 'generate raw transaction\n';
  // log.value += 'raw:\n';
  // const raw = buildMultiSigsTransaction({
  //   version: 2,
  //   asset: asset.mixin_id,
  //   inputs: [
  //     {
  //       hash: utxo.transaction_hash,
  //       index: utxo.output_index,
  //     },
  //   ],
  //   outputs: [
  //     {
  //       amount,
  //       mask: receivers[0].mask,
  //       keys: receivers[0].keys,
  //       script: encodeScript(threshold),
  //     },
  //   ],
  //   extra: 'refund',
  // });
  // log.value += raw + '\n\n'

  // Generate a multi-signature
  log.value += 'generate a multi-signature request...\n';
  console.log(input.value)
  const multisig = await userClient.multisig.create('sign', input.value);
  log.value += multisig.code_id;

  mixinUrl.value = `localhost:8080/codes/${multisig.code_id}`;
}
</script>