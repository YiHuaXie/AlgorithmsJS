import { leetCodeStart } from './leetCodeStart';
import { offerStart } from './offerStart';
import { KnowledgeStart } from './knowledgeStart';

export const algorithmsStart = () => {
    console.log("===============数据结构与算法的基础知识===============");
    KnowledgeStart();
    console.log("==============================");
    console.log("===============LeetCode===============");
    leetCodeStart();
    console.log("==============================");
    console.log("===============剑指Offer===============");
    offerStart();
    console.log("==============================");
}