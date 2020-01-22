using System;
using System.Collections.Generic;
using System.Linq;

namespace MyAplicationCore
{
    class Program
    {
        static void Main(string[] args)
        {
            List<RuleResponse> rules = new List<RuleResponse>();
            List<RuleResult> ruleResults = new List<RuleResult>();
            PointColors[] po = new PointColors[5];

            List<double> deviationPoints = new List<double> { 1.73, 1.056, 1.257, 1.498, 1.003 };
            List<double> deviationValues = new List<double> { 0.397, 1.73, 1.056, 1.257, 1.498,
                                                              1.003, 1.003, 0.604, 0.512, 0.516,
                                                              0.525, 0.66 };
            int i =0;
            foreach (double d in deviationPoints)
            {
                
                PointColors points = new PointColors()
                {
                    PointColor = 2,
                    PointValue = d
                };
                po[i] = points;
                i++;
            }

            int count = deviationValues.Count();

            RuleResult rule = new RuleResult()
            {
                AlertColor = 2,
                PointColorsArray = po
            };

            ruleResults.Add(rule);

            double[] piecesToPaint = new double[count];

            foreach (RuleResult rul in ruleResults) {

                List<PointColors> pointsColor = (from v in rul.PointColorsArray
                                                 select v).ToList();


                foreach (PointColors pnclr in pointsColor)
                {
                    int index = deviationValues.IndexOf(pnclr.PointValue);
                    if (index != -1)
                    {
                        piecesToPaint[index] = pnclr.PointColor;
                    }
                }

                RuleResponse finalResponse = new RuleResponse()
                {
                    AlertColor = rul.AlertColor,
                    PointColorsPaint = piecesToPaint
                };
                rules.Add(finalResponse);
            } //End foreach Rules

            foreach (var r in rules) {
                Console.WriteLine("AlerColor " + r.AlertColor);
                foreach (var s in r.PointColorsPaint)
                {
                    Console.WriteLine(s);
                }
            }

        }
    }
}
