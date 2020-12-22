#include <stdio.h>
#include "veinteveinte.h"
#include <time.h>

typedef struct
{
	double r; // a fraction between 0 and 1
	double g; // a fraction between 0 and 1
	double b; // a fraction between 0 and 1
} rgb;

typedef struct
{
	double h; // angle in degrees
	double s; // a fraction between 0 and 1
	double v; // a fraction between 0 and 1
} hsv;

static rgb hsv2rgb(hsv in)
{
	double h = in.h;
	double s = in.s;
	double v = in.v;

	int h_i = (int)(h * 6);
	double f = (double)(h * 6) - h_i;
	double p = v * (1 - s);
	double q = v * (1 - f * s);
	double t = v * (1 - (1 - f) * s);
	double r, g, b;

	if (h_i == 0)
	{
		r = v;
		g = t;
		b = p;
	}
	else if (h_i == 1)
	{
		r = q;
		g = v;
		b = p;
	}
	else if (h_i == 2)
	{
		r = p;
		g = v;
		b = t;
	}
	else if (h_i == 3)
	{
		r = p;
		g = q;
		b = v;
	}
	else if (h_i == 4)
	{
		r = t;
		g = p;
		b = v;
	}
	else
	{
		r = v;
		g = p;
		b = q;
	}
	rgb result;
	result.r = (r * 256);
	result.g = (g * 256);
	result.b = (b * 256);
	return result;
}

static double dmod(double x, double y)
{
	return x - (int)(x / y) * y;
}

static rgb generateColors(double h)
{
	double golden_ratio_conjugate = 0.618033988749895;
	//  # use random start value
	h += golden_ratio_conjugate;
	h = dmod(h, 1);
	hsv r;
	r.h = h;
	r.s = 0.90;
	r.v = 0.90;
	return hsv2rgb(r);
}

int main()
{
	Grafo G = ConstruccionDelGrafo();
	u32 color = Greedy(G);
	printf("{'numCCs':'%d','color':'%d',", NumCCs(G), color);

	srand(time(NULL));
	rgb colors[color];
	for (u32 i = 0; i < color; i++)
	{
		double h = rand() / (double)(RAND_MAX);
		colors[i] = generateColors(h);
	}
	printf("'colors':[");
	for (u32 i = 0; i < color - 1; i++)
	{
		printf("'rgba(%f,%f,%f,0.5)',", colors[i].r, colors[i].g, colors[i].b);
	}
	printf("'rgba(%f,%f,%f,0.5)'],", colors[color - 1].r, colors[color - 1].g, colors[color - 1].b);

	printf("'nodes':[");
	u32 c;
	for (u32 i = 0; i < G->n - 1; i++)
	{
		printf("{'id':%d,'label':'%d',", G->natural[i]->nombre, G->natural[i]->nombre);
		c = G->natural[i]->color;
		printf("'color':'rgba(%f,%f,%f,0.5)'},", colors[c].r, colors[c].g, colors[c].b);
	}
	printf("{'id':%d,'label':'%d',", G->natural[G->n - 1]->nombre, G->natural[G->n - 1]->nombre);
	c = G->natural[G->n - 1]->color;
	printf("'color':'rgba(%f,%f,%f,0.5)'}],", colors[c].r, colors[c].g, colors[c].b);
	printf("'edges':[");
	for (u32 i = 0; i < G->m - 1; i++)
	{
		printf("{'from':%d,'to':%d},", G->E[i].n1, G->E[i].n2);
	}
	printf("{'from':%d,'to':%d}]}", G->E[G->m - 1].n1, G->E[G->m - 1].n2);

	DestruccionDelGrafo(G);
}