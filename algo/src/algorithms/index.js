import { learningStart } from './BasicKnowledgeStart';
import { leetCodeStart } from './leetCodeStart';
import { offerStart } from './offerStart';
import { BasicKnowledgeStart } from './BasicKnowledgeStart';

export const algorithmsStart = () => {
    console.log("===============数据结构与算法的基础知识===============");
    BasicKnowledgeStart();
    console.log("==============================");
    console.log("===============LeetCode===============");
    leetCodeStart();
    console.log("==============================");
    console.log("===============剑指Offer===============");
    offerStart();
    console.log("==============================");
}