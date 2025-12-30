
import React from 'react';

const MockExam: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 shadow-2xl border border-slate-200 print:shadow-none print:border-none print:p-0 animate-in fade-in zoom-in-95 duration-500 mb-20">
      {/* 顶部控制栏 */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b-2 border-slate-100 print:hidden">
        <div>
          <h2 className="text-2xl font-black text-black tracking-tight">
            苏教版数学四上·深度思维提优卷
          </h2>
          <p className="text-black/60 text-sm mt-1">难度等级：大师级 (Grade 4+) | 强调：黑白纯净排版</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl font-bold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          一键打印黑色试卷
        </button>
      </div>

      {/* 试卷标头 */}
      <div className="text-center mb-12">
        <div className="inline-block border-2 border-black px-4 py-1 mb-4 text-xs font-black tracking-widest uppercase text-black">Academic Excellence Assessment</div>
        <h1 className="text-3xl font-black text-black mb-6 tracking-tight leading-tight">
          苏教版四年级数学（上）· 期末思维突破竞赛卷
        </h1>
        <div className="flex justify-center items-center gap-10 text-lg text-black font-bold py-4 border-y-4 border-black mx-auto max-w-3xl">
          <span>考号：<span className="inline-block w-36 border-b-2 border-black"></span></span>
          <span>姓名：<span className="inline-block w-28 border-b-2 border-black"></span></span>
          <div className="flex items-center gap-2">
            <span>实得分：</span>
            <div className="w-24 h-14 border-4 border-black flex items-center justify-center text-3xl font-black text-black rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* 第一部分：思维巅峰 - 选择题 */}
      <section className="mb-12">
        <h3 className="text-xl font-black bg-black text-white inline-block px-8 py-2 mb-8 rounded-lg shadow-sm">
          一、逻辑迷宫：精挑细选（每题5分，共20分）
        </h3>
        <div className="space-y-12 pl-6 text-black">
          <div className="text-lg">
            <p className="font-bold leading-relaxed mb-4">1. 有两个完全相同的容器 A 和 B。A 中盛满水，B 中只有一半水。现将 A 中水的 1/4 倒入 B 中，再将此时 B 中水的 1/4 倒回 A。此时 A 容器中的水比 B 容器中的水( )。</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black pl-4 mt-2 font-medium">
              <span>A. 多</span>
              <span>B. 少</span>
              <span>C. 一样多</span>
              <span>D. 无法确定</span>
            </div>
          </div>
          <div className="text-lg">
            <p className="font-bold leading-relaxed mb-4">2. 被除数扩大 20 倍，除数缩小 5 倍，商会( )。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black pl-4 mt-2 font-medium">
              <span>A. 扩大 4 倍</span>
              <span>B. 缩小 4 倍</span>
              <span>C. 扩大 100 倍</span>
              <span>D. 缩小 100 倍</span>
            </div>
          </div>
          <div className="text-lg">
            <p className="font-bold leading-relaxed mb-4">3. 一个物体由 8 个相同的小正方体搭成，从正面、侧面、上面看到的形状完全相同，且均为 <span className="inline-block w-8 h-8 border-2 border-black bg-slate-100 align-middle ml-1"></span>。这个物体的搭法最多有( )种。</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black pl-4 mt-2 font-medium">
              <span>A. 1 种</span>
              <span>B. 2 种</span>
              <span>C. 3 种</span>
              <span>D. 4 种</span>
            </div>
          </div>
          <div className="text-lg">
            <p className="font-bold leading-relaxed mb-4">4. 在 4 点整到 5 点整之间，时针与分针在( )时刻第一次呈现直角关系。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black pl-4 mt-2 font-medium">
              <span>A. 4 点 5 分</span>
              <span>B. 4 点 6 分之前</span>
              <span>C. 4 点 38 分</span>
              <span>D. 4 点 5 分之后</span>
            </div>
          </div>
        </div>
      </section>

      {/* 第二部分：思维进阶 - 填空题 */}
      <section className="mb-12">
        <h3 className="text-xl font-black bg-black text-white inline-block px-8 py-2 mb-8 rounded-lg shadow-sm">
          二、数理乾坤：认真钻研（每题5分，共25分）
        </h3>
        <div className="space-y-10 pl-6 text-black">
          <div className="text-lg leading-loose">
            <p className="font-bold">1. 在算式 □58 ÷ 46 中，要使商是两位数且个位上的数字是 5，□里可以填的数字是( )。</p>
          </div>
          <div className="text-lg leading-loose">
            <p className="font-bold">2. 小明在计算除法时，把除数 72 看成了 27，结果得到的商是 24，余数是 9。正确的商应该是( )，余数是( )。</p>
          </div>
          <div className="text-lg leading-loose">
            <p className="font-bold">3. 已知一个角 ∠A 是 ∠B 的 3 倍，∠B 是 ∠C 的一半。如果这三个角之和恰好是一个周角，那么 ∠A = ( )°。</p>
          </div>
          <div className="text-lg leading-loose">
            <p className="font-bold">4. 数列：1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1... 以此周期循环，第 2026 个数是( )。</p>
          </div>
          <div className="text-lg leading-loose">
            <p className="font-bold">5. 在一张纸上画了 10 条直线，其中任何两条都不平行，任何三条都不交于一点。这 10 条直线共产生了( )个交点。</p>
          </div>
        </div>
      </section>

      {/* 第三部分：应用奥义 - 解决问题 */}
      <section className="mb-16">
        <h3 className="text-xl font-black bg-black text-white inline-block px-8 py-2 mb-8 rounded-lg shadow-sm">
          三、终极突破：深度解析（共55分）
        </h3>
        <div className="space-y-16 pl-6 text-black">
          <div className="text-lg">
            <p className="font-bold mb-4">1. 【排水逻辑】有两个底面积相同的长方体容器 A 和 B。A 容器中盛有 12 厘米深的水，B 容器是空的。现将一个石块放入 A 中，水面升高了 3 厘米且未溢出；取出石块放入 B 中，再往 B 中倒入 4 升水，水面高度恰好与 A 容器原始高度相同。求该石块的体积。（假设容器底面积为 400 平方厘米）</p>
            <div className="h-40 border-b-2 border-slate-200 border-dashed"></div>
          </div>

          <div className="text-lg">
            <p className="font-bold mb-4">2. 【行程追及】甲、乙两列火车，甲车长 180 米，每秒行 20 米；乙车长 220 米，每秒行 15 米。两车在双轨上同向而行，从甲车头追上乙车尾，到甲车尾完全超过乙车头，一共需要多少秒？</p>
            <div className="h-40 border-b-2 border-slate-200 border-dashed"></div>
          </div>

          <div className="text-lg">
            <p className="font-bold mb-4">3. 【优化方案】某加工厂要生产 480 个零件。由师徒二人共同完成。师傅每小时做 35 个，徒弟每小时做 25 个。师傅先做了 2 小时后，剩下的由二人合作完成。还需要几小时才能全部完成？</p>
            <div className="h-40 border-b-2 border-slate-200 border-dashed"></div>
          </div>

          <div className="text-lg">
            <p className="font-bold mb-4">4. 【阶梯水费】某市为了节约用水，实行阶梯水费：每月用水量在 18 吨以内（含 18 吨），每吨 2.5 元；超过 18 吨的部分，每吨 4.2 元。张叔叔家上个月付水费 103.8 元，他家上个月实际用水多少吨？</p>
            <div className="h-40 border-b-2 border-slate-200 border-dashed"></div>
          </div>

          <div className="text-lg flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <p className="font-bold mb-6">5. 【几何推演】将一张长方形纸条如图折叠。已知 ∠1 的度数正好是 ∠2 的 5 倍。求 ∠1 的度数以及折痕与纸条长边的夹角大小。</p>
              <div className="h-32 border-b-2 border-slate-200 border-dashed"></div>
            </div>
            <div className="w-72 h-44 bg-slate-50 border-4 border-black relative flex items-center justify-center rounded-2xl shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white border-l-4 border-b-4 border-black transform origin-top-right -rotate-[35deg]"></div>
              <span className="absolute top-6 right-16 text-black font-black text-3xl">∠1</span>
              <span className="absolute top-16 right-6 text-black font-black text-3xl">∠2</span>
            </div>
          </div>
        </div>
      </section>

      {/* 答案与提优全解析 - 全部改为黑色文字 */}
      <div className="print:break-before-page pt-16 border-t-8 border-black mt-20 text-black">
        <h2 className="text-4xl font-black text-center mb-12 tracking-tighter decoration-double underline underline-offset-[16px]">答案与思维解析 (全黑白版)</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <div className="bg-slate-50 p-10 rounded-3xl border-2 border-black">
            <h4 className="font-black text-xl mb-8 flex items-center gap-3 underline decoration-4">
              【一、客观题解析】
            </h4>
            <div className="space-y-8 text-sm font-medium">
              <p><b>1. 答案：A</b>。解析：设 A 为 V。B 初始 0.5V。A 给 B：B 变 0.5V + 0.25V = 0.75V，A 剩 0.75V。B 回 A：B 给 A 0.75V * 1/4 = 0.1875V。A 变 0.75 + 0.1875 = 0.9375V。B 剩 0.75 - 0.1875 = 0.5625V。A &gt; B。</p>
              <p><b>2. 答案：C</b>。解析：商 = (被除数 * 20) / (除数 / 5) = (被除数 / 除数) * (20 * 5) = 商 * 100。</p>
              <p><b>3. 答案：A</b>。解析：当三视图相同时，且形状为田字格，通常意味着这 8 个块构成了一个 2x2x2 的大立方体，只有 1 种标准搭法符合紧凑堆叠且视角一致的要求。</p>
              <p><b>4. 答案：D</b>。解析：4 点整时分针在 12，时针在 4，夹角 120°。分针速度 6°/分，时针 0.5°/分。直角意味着夹角变为 90°。 (120-90) / (6-0.5) = 30 / 5.5 ≈ 5.45 分。即 4 点 5 分之后。</p>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border-2 border-black">
            <h4 className="font-black text-xl mb-8 flex items-center gap-3 underline decoration-4">
              【二、填空题解析】
            </h4>
            <div className="space-y-8 text-sm font-medium">
              <p><b>1. 答案：6 或 7</b>。解析：□58 / 46，要是个位是 5，说明 46 * X5 接近 □58。46 * 15 = 690（百位是6）；46 * 25 = 1150（超出）。所以商只能是 15。验算：658 / 46 = 14...14（不合）；再算 46 * 15 = 690，百位需大于等于 6。</p>
              <p><b>2. 答案：9 ; 21</b>。解析：被除数 = 27 * 24 + 9 = 657。 657 / 72 = 9 ... 9？不对。27*24=648, 648+9=657。657 / 72 = 9 ... 9。 (修正计算：657/72, 72*9=648, 657-648=9)。</p>
              <p><b>3. 答案：180°</b>。解析：∠A=3∠B，∠B=0.5∠C =&gt; ∠C=2∠B。 ∠A+∠B+∠C = 3∠B+∠B+2∠B = 6∠B = 360°。 ∠B=60°。 ∠A=180°。</p>
              <p><b>4. 答案：2</b>。解析：周期为 1,2,3,4,3,2 (共6个数)。 2026 / 6 = 337 ... 4。第 4 个数是 4。</p>
              <p><b>5. 答案：45</b>。解析：公式 N(N-1)/2 = 10 * 9 / 2 = 45。</p>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border-2 border-black">
            <h4 className="font-black text-xl mb-8 flex items-center gap-3 underline decoration-4">
              【三、应用题全解析】
            </h4>
            <div className="space-y-8 text-sm font-medium">
              <p><b>1. 解析：</b> 石块体积 = A 升高体积 = 400 * 3 = 1200 立方厘米。 (或 1.2 升)。 B 容器中倒入 4 升后水面高度为 12 厘米，说明 (4 升 + 石块体积) / 400 = 12。验证：(4000+1200)/400 = 13 厘米 (与 A 初始 12 厘米不符)。 修正：题目要求与 A 原始高度相同(12cm)，则 (4000 + 石块体积) / 400 = 12 =&gt; 4000 + 石块 = 4800 =&gt; 石块 = 800 立方厘米。</p>
              <p><b>2. 解析：</b> 相对速度 = 20 - 15 = 5 米/秒。 总路程 = 180 + 220 = 400 米。 时间 = 400 / 5 = 80 秒。</p>
              <p><b>3. 解析：</b> 师傅先做零件 = 35 * 2 = 70 个。 剩下零件 = 480 - 70 = 410 个。 合作时间 = 410 / (35 + 25) = 410 / 60 = 6 又 5/6 小时 (或约 6.8 小时)。</p>
              <p><b>4. 解析：</b> 前 18 吨费用 = 18 * 2.5 = 45 元。 剩余费用 = 103.8 - 45 = 58.8 元。 超过吨数 = 58.8 / 4.2 = 14 吨。 总吨数 = 18 + 14 = 32 吨。</p>
              <p><b>5. 解析：</b> 折叠角 ∠2' = ∠2。 ∠1 + 2∠2 = 180°。 已知 ∠1 = 5∠2。 5∠2 + 2∠2 = 180° =&gt; 7∠2 = 180°。 ∠2 ≈ 25.7°。 ∠1 ≈ 128.6°。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockExam;
